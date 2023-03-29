import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import {deviceRoute} from "./device.route";
import {DeviceComponent} from "./list/device.component";
import { DeviceUpdateComponent } from './update/device-update.component';
import { DeviceDeleteDialogComponent } from './delete/device-delete-dialog.component';
import { DeviceDetailComponent } from './detail/device-detail.component';
import {NgChartsModule} from "ng2-charts";
import {DeviceTimerModalComponent} from "./detail/timer-modal/device-timer-modal.component";


@NgModule({
  imports: [SharedModule, RouterModule.forChild(deviceRoute),
    NgChartsModule
  ],
  declarations: [
    DeviceComponent,
    DeviceUpdateComponent,
    DeviceDeleteDialogComponent,
    DeviceDetailComponent,
    DeviceTimerModalComponent
  ],
})
export class DeviceModule {}
