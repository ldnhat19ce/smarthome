import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApplicationConfigService } from '../../../core/config/application-config.service';
import { IDevice } from '../device.model';
import { IDeviceTimer } from '../device-timer.model';
import { Observable } from 'rxjs';
import { Pagination } from '../../../core/request/request.model';
import { createRequestOption } from '../../../core/request/request-util';

@Injectable({
  providedIn: 'root',
})
export class DeviceTimerService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/device-timer');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  create(deviceTimer: IDeviceTimer): Observable<IDeviceTimer> {
    return this.http.post<IDeviceTimer>(this.resourceUrl, deviceTimer);
  }

  query(req?: Pagination, deviceId?: String): Observable<HttpResponse<IDeviceTimer[]>> {
    let queryResourceUrl = this.resourceUrl + '/' + deviceId;
    const options = createRequestOption(req);
    return this.http.get<IDeviceTimer[]>(queryResourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}
