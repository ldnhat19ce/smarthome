import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'app/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { LocalStorageService } from 'ngx-webstorage';
import { DeviceTokenService } from '../core/device-token/device-token.service';
import { DeviceToken, IDeviceToken } from '../core/device-token/device-token.model';

@Component({
  selector: 'jhi-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('username', { static: false })
  username!: ElementRef;

  authenticationError = false;

  loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rememberMe: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
  });

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private deviceTokenService: DeviceTokenService
  ) {}

  ngOnInit(): void {
    // if already authenticated then navigate to home page
    this.accountService.identity().subscribe(() => {
      if (this.accountService.isAuthenticated()) {
        this.router.navigate(['']);
      }
    });
  }

  ngAfterViewInit(): void {
    this.username.nativeElement.focus();
  }

  login(): void {
    const tokenInLocalStorage: string | null = this.localStorageService.retrieve('deviceToken');

    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        const deviceToken: IDeviceToken = new DeviceToken(null, tokenInLocalStorage!!);
        this.deviceTokenService.create(deviceToken).subscribe({
          next: () => {
            console.log('save success');
          },
        });
        this.authenticationError = false;
        if (!this.router.getCurrentNavigation()) {
          // There were no routing during login (eg from navigationToStoredUrl)
          this.router.navigate(['']);
        }
      },
      error: () => (this.authenticationError = true),
    });
  }
}
