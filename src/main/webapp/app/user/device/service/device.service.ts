import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {ApplicationConfigService} from "../../../core/config/application-config.service";
import {Pagination} from "../../../core/request/request.model";
import {createRequestOption} from "../../../core/request/request-util";
import {Observable} from "rxjs";
import {IDevice} from "../device.model";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/devices');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {
  }

  query(req?: Pagination): Observable<HttpResponse<IDevice[]>> {
    const options = createRequestOption(req);
    return this.http.get<IDevice[]>(this.resourceUrl, {params: options, observe: 'response'});
  }

  queryDeviceAction(deviceType : string): Observable<IDevice[]> {
    return this.http.get<IDevice[]>(`${this.resourceUrl}?deviceType=${deviceType}`);
  }

  find(id: string): Observable<IDevice> {
    return this.http.get<IDevice>(`${this.resourceUrl}/${id}`);
  }

  create(device: IDevice): Observable<IDevice> {
    return this.http.post<IDevice>(this.resourceUrl, device);
  }

  delete(id: string): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }

  update(device: IDevice): Observable<IDevice> {
    return this.http.put<IDevice>(this.resourceUrl, device);
  }

  updateStateDevice(id : string) : Observable<any> {
    return this.http.put<any>(`${this.resourceUrl}/action/${id}`, null);
  }
}
