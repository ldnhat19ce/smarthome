import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {ApplicationConfigService} from "../../../core/config/application-config.service";
import {Pagination} from "../../../core/request/request.model";
import {createRequestOption} from "../../../core/request/request-util";
import {Observable} from "rxjs";
import {ISpeechData, ISpeechDataDTO} from "../speech-data.model";

@Injectable({
  providedIn: 'root'
})
export class SpeechDataService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/speech-data');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {
  }

  query(req?: Pagination): Observable<HttpResponse<ISpeechData[]>> {
    const options = createRequestOption(req);
    return this.http.get<ISpeechData[]>(this.resourceUrl, {params: options, observe: 'response'});
  }

  find(id: string): Observable<ISpeechDataDTO> {
    return this.http.get<ISpeechDataDTO>(`${this.resourceUrl}/${id}`);
  }

  create(speechData: ISpeechDataDTO): Observable<ISpeechData> {
    return this.http.post<ISpeechData>(this.resourceUrl, speechData);
  }

  delete(id: string): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }

  update(speechData: ISpeechData): Observable<ISpeechData> {
    return this.http.put<ISpeechData>(this.resourceUrl, speechData);
  }

  handleMessageRequest(speechData : ISpeechDataDTO) : Observable<ISpeechData> {
    return this.http.post<ISpeechData>(`${this.resourceUrl}/text`, speechData);
  }
}
