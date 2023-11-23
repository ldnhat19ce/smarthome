import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApplicationConfigService } from '../../../core/config/application-config.service';
import { Pagination } from '../../../core/request/request.model';
import { createRequestOption } from '../../../core/request/request-util';
import { Observable } from 'rxjs';
import { IDeviceMonitor } from '../device-monitor.model';
import { IStatisticalDeviceMonitor } from '../statistical-device-monitor.model';
import { IDeviceMonitor2Model } from '../../../entities/device-monitor2.model';

@Injectable({
  providedIn: 'root',
})
export class DeviceMonitorService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/device-monitor');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  query(req?: Pagination, deviceId?: String): Observable<HttpResponse<IDeviceMonitor[]>> {
    let queryResourceUrl = this.resourceUrl + '/' + deviceId;
    const options = createRequestOption(req);
    return this.http.get<IDeviceMonitor[]>(queryResourceUrl, { params: options, observe: 'response' });
  }

  getAllDeviceMonitor(req?: Pagination, deviceId?: String): Observable<HttpResponse<IDeviceMonitor[]>> {
    let queryResourceUrl = this.resourceUrl + '/' + deviceId;
    const options = createRequestOption(req);
    return this.http.get<IDeviceMonitor[]>(queryResourceUrl, { params: options, observe: 'response' });
  }

  statisticalByMonth(deviceId: String): Observable<HttpResponse<IStatisticalDeviceMonitor[]>> {
    let queryResourceUrl = this.resourceUrl + '/statistical/month/' + deviceId;
    return this.http.get<IStatisticalDeviceMonitor[]>(queryResourceUrl, { observe: 'response' });
  }

  statisticalByDay(deviceId: String): Observable<HttpResponse<IStatisticalDeviceMonitor[]>> {
    let queryResourceUrl = this.resourceUrl + '/statistical/day/' + deviceId;
    return this.http.get<IStatisticalDeviceMonitor[]>(queryResourceUrl, { observe: 'response' });
  }

  statisticalByHour(deviceId: String): Observable<HttpResponse<IStatisticalDeviceMonitor[]>> {
    let queryResourceUrl = this.resourceUrl + '/statistical/hour/' + deviceId;
    return this.http.get<IStatisticalDeviceMonitor[]>(queryResourceUrl, { observe: 'response' });
  }

  getLatest(): Observable<HttpResponse<IDeviceMonitor2Model>> {
    let queryResourceUrl = this.resourceUrl + '/latest';
    return this.http.get<IDeviceMonitor2Model>(queryResourceUrl, { observe: 'response' });
  }
}
