import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceNotificationService } from '../service/device-notification.service';
import { Device, DeviceDTO, IDeviceDTO } from '../device.model';
import { INotificationSetting, NotificationSetting } from '../device-notification.model';
import { ITEMS_PER_PAGE } from '../../../config/pagination.constants';
import { ASC, DESC, SORT } from '../../../config/navigation.constants';
import { combineLatest } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationSettingDeleteComponent } from '../notification-setting-delete/notification-setting-delete.component';

@Component({
  selector: 'jhi-device-notification',
  templateUrl: './device-notification.component.html',
  styleUrls: ['./device-notification.component.scss'],
})
export class DeviceNotificationComponent implements OnInit {
  isSaving = false;
  device?: Device;
  notificationSettings: NotificationSetting[] | null = null;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;
  isLoading = false;

  editForm = new FormGroup({
    id: new FormControl(''),
    value: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
      ],
    }),
    title: new FormControl('', { nonNullable: true }),
    message: new FormControl('', { nonNullable: true }),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private deviceNotificationService: DeviceNotificationService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ device }) => {
      this.device = device;
    });
    this.handleNavigation();
  }

  trackIdentity(_index: number, item: Device): string {
    return item.id!;
  }

  transition(): void {
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: this.page,
        sort: `${this.predicate},${this.ascending ? ASC : DESC}`,
      },
    });
  }

  save(): void {
    this.isSaving = true;
    const result = this.editForm.getRawValue();
    const deviceDTO: IDeviceDTO = new DeviceDTO(this.device?.id!!, null, null);
    const notificationSetting: INotificationSetting = new NotificationSetting(null, result.value, result.title, result.message, deviceDTO);
    this.deviceNotificationService.create(notificationSetting).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  previousState(): void {
    window.history.back();
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.editForm.reset();
    this.loadAll();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }

  private handleNavigation(): void {
    combineLatest([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
      const page = params.get('page');
      this.page = +(page ?? 1);
      const sort = (params.get(SORT) ?? data['defaultSort']).split(',');
      this.predicate = sort[0];
      this.ascending = sort[1] === ASC;
      this.loadAll();
    });
  }

  private sort(): string[] {
    const result = [`${this.predicate},${this.ascending ? ASC : DESC}`];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  loadAll(): void {
    if (this.device?.id !== null) {
      this.isLoading = true;
      this.deviceNotificationService
        .query(
          {
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
          },
          this.device?.id
        )
        .subscribe({
          next: (res: HttpResponse<INotificationSetting[]>) => {
            this.isLoading = false;
            this.onSuccess(res.body, res.headers);
          },
          error: () => (this.isLoading = false),
        });
    }
  }

  private onSuccess(notificationSettings: NotificationSetting[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.notificationSettings = notificationSettings;
    // console.log(deviceMonitors);
  }

  deleteNotificationSetting(notificationSetting: NotificationSetting): void {
    const modalRef = this.modalService.open(NotificationSettingDeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.notificationSetting = notificationSetting;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
