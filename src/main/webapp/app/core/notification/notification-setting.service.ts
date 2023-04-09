import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class NotificationSettingService {
  currentMessage = new Subject<any>();

  constructor(private angularFireMessaging: AngularFireMessaging, private localStorageService: LocalStorageService) {}

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      token => {
        console.log(token);
        this.localStorageService.store('deviceToken', token);
      },
      error => {
        console.log('Unable to get permission to notify...', error);
      }
    );
  }

  receiveMessaging() {
    this.angularFireMessaging.messages.subscribe((payload: any) => {
      console.log('new message received ', payload);
      if (payload !== null) {
        this.currentMessage.next(payload);
      }
    });
  }
}
