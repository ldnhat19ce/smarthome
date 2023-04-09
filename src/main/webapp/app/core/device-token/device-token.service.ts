import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationConfigService } from '../config/application-config.service';
import { IDeviceToken } from './device-token.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceTokenService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/device-token');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  create(deviceToken: IDeviceToken): Observable<IDeviceToken> {
    return this.http.post<IDeviceToken>(this.resourceUrl, deviceToken);
  }
}
