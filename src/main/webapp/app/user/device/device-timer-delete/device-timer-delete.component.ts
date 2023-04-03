import { Component } from '@angular/core';
import { DeviceTimer } from '../device-timer.model';
import { DeviceTimerService } from '../service/device-timer.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-device-timer-delete',
  templateUrl: './device-timer-delete.component.html',
  styleUrls: ['./device-timer-delete.component.scss'],
})
export class DeviceTimerDeleteComponent {
  deviceTimer?: DeviceTimer;

  constructor(private deviceTimerService: DeviceTimerService, private activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.deviceTimerService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
