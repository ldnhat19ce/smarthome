import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApplicationConfigService } from '../../core/config/application-config.service';
import { Observable } from 'rxjs';
import { INewsModel } from './news.model';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/news');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  findLatestNews(): Observable<HttpResponse<INewsModel[]>> {
    let queryResourceUrl = this.resourceUrl;
    return this.http.get<INewsModel[]>(queryResourceUrl, { observe: 'response' });
  }
}
