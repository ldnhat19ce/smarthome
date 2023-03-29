import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {AccountService} from 'app/core/auth/account.service';
import {Account} from 'app/core/auth/account.model';
import {VoiceRecognitionService} from "./service/voice-recognition.service";

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [VoiceRecognitionService]
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  text: string | undefined;

  private readonly destroy$ = new Subject<void>();

  constructor(private accountService: AccountService,
              private router: Router,
              public voiceRecognitionService: VoiceRecognitionService) {
    this.voiceRecognitionService.init()
  }

  ngOnInit(): void {
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
    this.voiceRecognitionService.start()
  }

  stopService() {
    this.voiceRecognitionService.stop()
  }
}
