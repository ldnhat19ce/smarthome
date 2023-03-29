import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Routes} from '@angular/router';
import {Observable, of} from 'rxjs';
import {SpeechDataComponent} from "./list/speech-data.component";
import {ISpeechDataDTO} from "./speech-data.model";
import {SpeechDataService} from "./service/speech-data.service";
import {SpeechDataUpdateComponent} from "./update/speech-data-update.component";
import {SpeechDataDetailComponent} from "./detail/speech-data-detail.component";

@Injectable({providedIn: 'root'})
export class SpeechDataResolve implements Resolve<ISpeechDataDTO | null> {
  constructor(private service: SpeechDataService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ISpeechDataDTO | null> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(null);
  }
}

export const speechDataRoute: Routes = [
  {
    path: '',
    component: SpeechDataComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/view',
    component: SpeechDataDetailComponent,
    resolve: {
      speechData: SpeechDataResolve,
    },
  },
  {
    path: 'new',
    component: SpeechDataUpdateComponent,
    resolve: {
      speechData: SpeechDataResolve,
    },
  },
  {
    path: ':id/edit',
    component: SpeechDataUpdateComponent,
    resolve: {
      speechData: SpeechDataResolve,
    },
  },
];
