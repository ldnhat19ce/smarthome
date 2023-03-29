import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceFirebaseService {
  private dbPath = '/develop';

  constructor(private db : AngularFirestore) {
  }

  getDeviceStateById() : AngularFirestoreCollection<any[]> {
    return this.db.collection("develop");
  }
}
