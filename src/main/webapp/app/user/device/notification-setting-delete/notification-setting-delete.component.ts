import { Component } from '@angular/core';
import { NotificationSetting } from '../device-notification.model';
import { DeviceNotificationService } from '../service/device-notification.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-notification-setting-delete',
  templateUrl: './notification-setting-delete.component.html',
  styleUrls: ['./notification-setting-delete.component.scss'],
})
export class NotificationSettingDeleteComponent {
  notificationSetting?: NotificationSetting;

  constructor(private deviceNotificationService: DeviceNotificationService, private activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.deviceNotificationService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
