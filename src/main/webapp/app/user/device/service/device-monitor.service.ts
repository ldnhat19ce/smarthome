import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {ApplicationConfigService} from "../../../core/config/application-config.service";
import {Pagination} from "../../../core/request/request.model";
import {IDevice} from "../device.model";
import {createRequestOption} from "../../../core/request/request-util";
import {Observable} from "rxjs";
import {IDeviceMonitor} from "../device-monitor.model";

@Injectable({
  providedIn: 'root'
})
export class DeviceMonitorService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/device-monitor');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {
  }

  query(req?: Pagination, deviceId?: String): Observable<HttpResponse<IDeviceMonitor[]>> {
    let queryResourceUrl = this.resourceUrl + "/" + deviceId;
    const options = createRequestOption(req);
    return this.http.get<IDevice[]>(queryResourceUrl, {params: options, observe: 'response'});
  }

  getAllDeviceMonitor(req?: Pagination, deviceId?: String): Observable<HttpResponse<IDeviceMonitor[]>> {
    let queryResourceUrl = this.resourceUrl + "/" + deviceId;
    const options = createRequestOption(req);
    return this.http.get<IDevice[]>(queryResourceUrl, {params: options, observe: 'response'});
  }
}
