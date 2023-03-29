import {Component} from '@angular/core';
import {Device} from "../device.model";
import {DeviceService} from "../service/device.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'jhi-device-delete-dialog',
  templateUrl: './device-delete-dialog.component.html'
})
export class DeviceDeleteDialogComponent {
  device?: Device;

  constructor(private deviceService: DeviceService,
              private activeModal: NgbActiveModal) {
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.deviceService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
