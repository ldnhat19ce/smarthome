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
import { DeviceTimerService } from '../service/device-timer.service';
import { DeviceTimer, IDeviceTimer } from '../device-timer.model';
import { DeviceTimerDeleteComponent } from '../device-timer-delete/device-timer-delete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConvertUtil } from '../../../common/utils/convert.util';
import { ValidationUtil } from '../../../common/utils/validation.util';
import { IStatisticalDeviceMonitor } from '../statistical-device-monitor.model';
import { CommonUtils } from '../../../common/utils/common.util';

declare const chartViewMonth: any;
declare const chartViewDay: any;
declare const chartViewHour: any;

@Component({
  selector: 'jhi-device-detail',
  templateUrl: './device-detail.component.html',
})
export class DeviceDetailComponent implements OnInit {
  device: Device = {} as Device;

  deviceMonitors: DeviceMonitor[] = [] as DeviceMonitor[];
  deviceTimers: DeviceTimer[] = [] as DeviceTimer[];
  listAllDeviceMonitors: DeviceMonitor[] = [] as DeviceMonitor[];

  statisticalMonth: IStatisticalDeviceMonitor[] = [];
  statisticalMonthXY: { x: String; y: String }[] = [];

  statisticalDay: IStatisticalDeviceMonitor[] = [];
  statisticalDayXY: { x: String; y: String }[] = [];

  statisticalHour: IStatisticalDeviceMonitor[] = [];
  statisticalHourXY: { x: String; y: String }[] = [];

  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  values: number[] = [];

  isLoading = false;
  ascending: boolean = false;
  isStateLoading: boolean = false;
  isDeviceControl: boolean = false;

  predicate: string = '';
  stateDevice: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private deviceMonitorService: DeviceMonitorService,
    private router: Router,
    private deviceFirebaseService: DeviceFirebaseService,
    private deviceService: DeviceService,
    private deviceTimerService: DeviceTimerService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ device }) => {
      this.device = device;
      if (this.device && 'CONTROL' == this.device!!.deviceType) {
        this.isDeviceControl = true;
      }
    });

    this.handleNavigation();
    if (this.device !== null && this.device?.deviceType == 'CONTROL') {
      this.deviceFirebaseService
        .getDeviceStateById()
        .doc('device_action')
        .collection(<string>this.device?.createdBy)
        .doc(this.device.id!!)
        .valueChanges()
        .subscribe(data => {
          this.stateDevice = data!!.action;
        });
    }
  }

  onChangeStateDevice() {
    this.isStateLoading = true;
    if (this.device !== null) {
      this.deviceService.updateStateDevice(this.device.id!!).subscribe(data => {
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
    if (this.device && this.device.id) {
      this.isLoading = true;
      if (this.device?.deviceType === 'MONITOR') {
        // this.loadDeviceMonitor(this.device.id);
        this.loadChartMonthDeviceMonitor(this.device.id);
        this.loadChartDayDeviceMonitor(this.device.id);
        this.loadChartHourDeviceMonitor(this.device.id);
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
    if (deviceMonitors) {
      this.deviceMonitors = deviceMonitors;
    }
  }

  private onDeviceTimerSuccess(deviceTimers: DeviceTimer[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    if (deviceTimers) {
      this.deviceTimers = deviceTimers;
    }
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

  deleteDeviceTimer(deviceTimer: DeviceTimer): void {
    const modalRef = this.modalService.open(DeviceTimerDeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.deviceTimer = deviceTimer;
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }

  private loadDeviceMonitor(deviceId: string) {
    this.deviceMonitorService
      .query(
        {
          page: this.page - 1,
          size: this.itemsPerPage,
          sort: this.sort(),
        },
        deviceId
      )
      .subscribe({
        next: (res: HttpResponse<IDeviceMonitor[]>) => {
          this.isLoading = false;
          this.onSuccess(res.body, res.headers);
        },
        error: () => (this.isLoading = false),
      });
  }

  private loadChartMonthDeviceMonitor(deviceId: string) {
    this.deviceMonitorService.statisticalByMonth(deviceId).subscribe(res => {
      if (ValidationUtil.isNotNullAndNotEmpty(res.body) && res.body !== null) {
        this.statisticalMonth = res.body;
        this.statisticalMonthXY = CommonUtils.mapXY(this.statisticalMonth);
        chartViewMonth(this.statisticalMonthXY, this.device?.name, 'chartByMonth');
      }
    });
  }

  private loadChartDayDeviceMonitor(deviceId: string) {
    this.deviceMonitorService.statisticalByDay(deviceId).subscribe(res => {
      if (ValidationUtil.isNotNullAndNotEmpty(res.body) && res.body !== null) {
        this.statisticalDay = res.body;
        this.statisticalDayXY = CommonUtils.mapXY(this.statisticalDay);
        chartViewDay(this.statisticalDayXY, this.device?.name, 'chartByDay');
      }
    });
  }

  private loadChartHourDeviceMonitor(deviceId: string) {
    this.deviceMonitorService.statisticalByHour(deviceId).subscribe(res => {
      if (ValidationUtil.isNotNullAndNotEmpty(res.body) && res.body !== null) {
        this.statisticalHour = res.body;
        this.statisticalHourXY = CommonUtils.mapXY(this.statisticalHour);
        chartViewHour(this.statisticalHourXY, this.device?.name, 'chartByHour');
      }
    });
  }
}
