import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { VoiceRecognitionService } from './service/voice-recognition.service';
import { NotificationSettingService } from '../core/notification/notification-setting.service';
import { DeviceService } from '../user/device/service/device.service';
import { IDevice } from '../user/device/device.model';
import { ValidationUtil } from '../common/utils/validation.util';
import { INewsModel } from '../entities/news/news.model';
import { NewsService } from '../entities/news/news.service';
import { DeviceMonitorService } from '../user/device/service/device-monitor.service';
import { IDeviceMonitor2Model } from '../entities/device-monitor2.model';
import { DeviceFirebaseService } from '../user/device/service/device-firebase.service';
import { ConvertUtil } from '../common/utils/convert.util';

declare const homeSwiper: any;
declare const doughnutHomeChart: any;
declare const test: any;

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [VoiceRecognitionService],
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  text: string | undefined;
  devices: IDevice[] = [] as IDevice[];

  news: INewsModel[] = [] as INewsModel[];

  deviceMonitor: IDeviceMonitor2Model = {} as IDeviceMonitor2Model;

  valueDeviceMonitor: Map<String, String> = new Map<String, String>();

  private readonly destroy$ = new Subject<void>();

  constructor(
    private accountService: AccountService,
    private router: Router,
    public voiceRecognitionService: VoiceRecognitionService,
    private notificationSettingService: NotificationSettingService,
    private deviceService: DeviceService,
    private newsService: NewsService,
    private deviceMonitorService: DeviceMonitorService,
    private deviceFirebaseService: DeviceFirebaseService
  ) {
    // this.voiceRecognitionService.init();
  }

  ngOnInit(): void {
    homeSwiper();

    this.loadDevices();
    this.loadNews();
    this.loadLatestDevice();
    // this.notificationSettingService.requestPermission();
    // this.notificationSettingService.receiveMessaging();
    // this.notificationSettingService.currentMessage.subscribe(data => {
    //   console.log(data);
    //   this.message = data;
    // })
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => (this.account = account));
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  startService() {
    this.voiceRecognitionService.start();
  }

  stopService() {
    this.voiceRecognitionService.stop();
  }

  loadDevices(): void {
    this.deviceService
      .query({
        page: 0,
        size: 8,
        sort: ['id'],
      })
      .subscribe(res => {
        if (ValidationUtil.isNotNullAndNotEmpty(res) && res.body) {
          this.devices = res.body;
          this.devices.forEach(v => {
            if (v.deviceType == 'MONITOR') {
              this.deviceFirebaseService
                .getDeviceStateById()
                .doc('device_monitor')
                .collection(ConvertUtil.convertToString(v.createdBy))
                .doc(ConvertUtil.convertToString(v.id))
                .valueChanges()
                .subscribe(res => {
                  this.valueDeviceMonitor.set(
                    ConvertUtil.convertToString(v.id),
                    ConvertUtil.convertToString(res!!.value + '' + res!!.unitMeasure)
                  );
                });
            }
          });
        }
      });
  }

  loadNews() {
    this.newsService.findLatestNews().subscribe(res => {
      if (res.body) {
        this.news = res.body;
      }
    });
  }

  loadLatestDevice() {
    this.deviceMonitorService.getLatest().subscribe(res => {
      if (res.body) {
        this.deviceMonitor = res.body;
        setTimeout(() => {
          doughnutHomeChart(this.deviceMonitor);
        }, 3000);
      }
    });
  }
}
