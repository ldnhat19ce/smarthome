import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApplicationConfigService } from '../../../core/config/application-config.service';
import { INotificationSetting } from '../device-notification.model';
import { Observable } from 'rxjs';
import { Pagination } from '../../../core/request/request.model';
import { createRequestOption } from '../../../core/request/request-util';

@Injectable({
  providedIn: 'root',
})
export class DeviceNotificationService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/notification-setting');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  create(notificationSetting: INotificationSetting): Observable<INotificationSetting> {
    return this.http.post<INotificationSetting>(this.resourceUrl, notificationSetting);
  }

  query(req?: Pagination, deviceId?: String): Observable<HttpResponse<INotificationSetting[]>> {
    let queryResourceUrl = this.resourceUrl + '/' + deviceId;
    const options = createRequestOption(req);
    return this.http.get<INotificationSetting[]>(queryResourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}
