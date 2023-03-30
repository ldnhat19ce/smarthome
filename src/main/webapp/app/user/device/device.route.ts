import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Routes} from "@angular/router";
import {IDevice} from "./device.model";
import {DeviceService} from "./service/device.service";
import {Observable, of} from "rxjs";
import {DeviceComponent} from "./list/device.component";
import {DeviceUpdateComponent} from "./update/device-update.component";
import {DeviceDetailComponent} from "./detail/device-detail.component";
import {DeviceTimerComponent} from "./timer/device-timer.component";


@Injectable({providedIn: 'root'})
export class DeviceResolve implements Resolve<IDevice | null> {
  constructor(private service: DeviceService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IDevice | null> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(null);
  }
}

export const deviceRoute: Routes = [
  {
    path: '',
    component: DeviceComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/view',
    component: DeviceDetailComponent,
    resolve: {
      device: DeviceResolve,
    },
    data: {
      defaultSort: 'createdDate,desc',
    }
  },
  {
    path: 'new',
    component: DeviceUpdateComponent,
    resolve: {
      device: DeviceResolve,
    },
  },
  {
    path: ':id/edit',
    component: DeviceUpdateComponent,
    resolve: {
      device: DeviceResolve,
    },
  },
  {
    path: ':id/timer',
    component: DeviceTimerComponent,
    resolve: {
      device: DeviceResolve,
    }
  }
];

