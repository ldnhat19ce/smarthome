import { Component, OnInit } from '@angular/core';
import { Device, IDevice } from '../device.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ITEMS_PER_PAGE } from '../../../config/pagination.constants';
import { DeviceMonitor, IDeviceMonitor } from '../device-monitor.model';
import { DeviceMonitorService } from '../service/device-monitor.service';
import { ASC, DESC, SORT } from '../../../config/navigation.constants';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { DeviceFirebaseService } from '../service/device-firebase.service';
import { DeviceService } from '../service/device.service';
import { Chart, registerables } from 'chart.js';
import { DeviceTimerService } from '../service/device-timer.service';
import { DeviceTimer, IDeviceTimer } from '../device-timer.model';
import { DeviceTimerDeleteComponent } from '../device-timer-delete/device-timer-delete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-device-detail',
  templateUrl: './device-detail.component.html',
})
export class DeviceDetailComponent implements OnInit {
  device: Device | null = null;
  isLoading = false;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;
  deviceMonitors: DeviceMonitor[] | null = null;
  deviceTimers: DeviceTimer[] | null = null;
  stateDevice!: string;
  isStateLoading = false;
  isDeviceControl = false;
  listAllDeviceMonitors: DeviceMonitor[] | null = null;
  values: number[] = [];
  chart: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private deviceMonitorService: DeviceMonitorService,
    private router: Router,
    private deviceFirebaseService: DeviceFirebaseService,
    private deviceService: DeviceService,
    private deviceTimerService: DeviceTimerService,
    private modalService: NgbModal
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ device }) => {
      this.device = device;
      if ('CONTROL' == this.device!!.deviceType) {
        this.isDeviceControl = true;
      }
    });
    this.handleNavigation();
    this.loadAllDeviceMonitor();
    if (this.device !== null && this.device?.deviceType == 'CONTROL') {
      this.deviceFirebaseService
        .getDeviceStateById()
        .doc('device_action')
        .collection(<string>this.device?.createdBy)
        .doc(this.device.id!!)
        .valueChanges()
        .subscribe(data => {
          this.stateDevice = data!!.action;
          console.log(this.stateDevice);
        });
    }
  }

  onChangeStateDevice() {
    this.isStateLoading = true;
    if (this.device !== null) {
      this.deviceService.updateStateDevice(this.device.id!!).subscribe(data => {
        console.log(data);
        this.isStateLoading = false;
      });
    }
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

  loadAll(): void {
    if (this.device?.id !== null) {
      this.isLoading = true;
      if (this.device?.deviceType === 'MONITOR') {
        this.deviceMonitorService
          .query(
            {
              page: this.page - 1,
              size: this.itemsPerPage,
              sort: this.sort(),
            },
            this.device?.id
          )
          .subscribe({
            next: (res: HttpResponse<IDeviceMonitor[]>) => {
              this.isLoading = false;
              this.onSuccess(res.body, res.headers);
            },
            error: () => (this.isLoading = false),
          });
      } else if (this.device?.deviceType === 'CONTROL') {
        this.deviceTimerService
          .query(
            {
              page: this.page - 1,
              size: this.itemsPerPage,
              sort: this.sort(),
            },
            this.device.id
          )
          .subscribe({
            next: (res: HttpResponse<IDeviceTimer[]>) => {
              this.isLoading = false;
              this.onDeviceTimerSuccess(res.body, res.headers);
            },
            error: () => (this.isLoading = false),
          });
      }
    }
  }

  private onSuccess(deviceMonitors: DeviceMonitor[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.deviceMonitors = deviceMonitors;
    console.log(deviceMonitors);
  }

  private onDeviceTimerSuccess(deviceTimers: DeviceTimer[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.deviceTimers = deviceTimers;
  }

  private sort(): string[] {
    const result = [`${this.predicate},${this.ascending ? ASC : DESC}`];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private static sortByCreatedAt(): string[] {
    return [`createdDate,${ASC}`];
  }

  loadAllDeviceMonitor() {
    if (this.device?.id !== null && this.device?.deviceType === 'MONITOR') {
      this.deviceMonitorService
        .query(
          {
            page: 0,
            size: Number.MAX_SAFE_INTEGER,
            sort: DeviceDetailComponent.sortByCreatedAt(),
          },
          this.device?.id
        )
        .subscribe({
          next: (res: HttpResponse<IDevice[]>) => {
            this.listAllDeviceMonitors = res.body;
            this.listAllDeviceMonitors?.map(data => {
              return this.values?.push(Number(data.value));
            });
            this.chart = new Chart('canvas', {
              type: 'line',
              data: {
                labels: this.values,
                datasets: [
                  {
                    data: [1, 2, 3],
                    borderColor: '#3e95cd',
                    fill: true,
                    label: this.device?.name,
                    backgroundColor: 'rgba(255,0,0,0.3)',
                    borderWidth: 3,
                    tension: 0.5,
                  },
                ],
              },
              options: {
                responsive: false,
                plugins: {
                  legend: {
                    display: true,
                    labels: {
                      color: 'rgb(255, 99, 132)',
                    },
                  },
                },
              },
            });
          },
        });
    }
  }

  deleteDeviceTimer(deviceTimer: DeviceTimer): void {
    const modalRef = this.modalService.open(DeviceTimerDeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.deviceTimer = deviceTimer;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
