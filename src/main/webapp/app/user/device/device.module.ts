import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { deviceRoute } from './device.route';
import { DeviceComponent } from './list/device.component';
import { DeviceUpdateComponent } from './update/device-update.component';
import { DeviceDeleteDialogComponent } from './delete/device-delete-dialog.component';
import { DeviceDetailComponent } from './detail/device-detail.component';
import { NgChartsModule } from 'ng2-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DeviceTimerComponent } from './timer/device-timer.component';
import { DeviceTimerDeleteComponent } from './device-timer-delete/device-timer-delete.component';
import { DeviceNotificationComponent } from './notification/device-notification.component';
import { NotificationSettingDeleteComponent } from './notification-setting-delete/notification-setting-delete.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(deviceRoute), NgChartsModule, OwlDateTimeModule, OwlNativeDateTimeModule],
  declarations: [
    DeviceComponent,
    DeviceUpdateComponent,
    DeviceDeleteDialogComponent,
    DeviceDetailComponent,
    DeviceTimerComponent,
    DeviceTimerDeleteComponent,
    DeviceNotificationComponent,
    NotificationSettingDeleteComponent,
  ],
})
export class DeviceModule {}
