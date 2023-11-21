import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { VoiceRecognitionService } from './service/voice-recognition.service';
import { NotificationSettingService } from '../core/notification/notification-setting.service';
import { DeviceService } from '../user/device/service/device.service';
import { Device, IDevice } from '../user/device/device.model';
import { HttpResponse } from '@angular/common/http';
import { ValidationUtil } from '../common/utils/validation.util';
import { INewsModel } from '../entities/news/news.model';
import { NewsService } from '../entities/news/news.service';

declare const homeSwiper: any;

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [VoiceRecognitionService],
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  text: string | undefined;
  devices: IDevice[] = [] as IDevice[];

  news: INewsModel[] = [] as INewsModel[];

  private readonly destroy$ = new Subject<void>();

  constructor(
    private accountService: AccountService,
    private router: Router,
    public voiceRecognitionService: VoiceRecognitionService,
    private notificationSettingService: NotificationSettingService,
    private deviceService: DeviceService,
    private newsService: NewsService
  ) {
    // this.voiceRecognitionService.init();
  }

  ngOnInit(): void {
    homeSwiper();

    this.loadDevices();
    this.loadNews();
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
}
