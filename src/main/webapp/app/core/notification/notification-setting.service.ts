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
    this.angularFireMessaging.requestPermission.subscribe(
      s => {
        if (s === 'granted') {
          // this.angularFireMessaging.deleteToken("e1ZT9MK3nMvQpBtqmIFc_B:APA91bEjHmF50eIhZeTG25FgSYatfasF34xC1m1d6-jsC-psFlDVU84q_uakNt0ghjdynuTRa8uPY76MTGmNokTwG2QKV-vzVySQHW2WHV15mKVBSpK_jdS5KIbosxp-C61McqvQ4egh")
          //   .subscribe(st => {
          //     console.log(st);
          //   });
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
      },
      error => console.log('error: ' + error)
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
