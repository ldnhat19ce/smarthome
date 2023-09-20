import { Component, OnInit } from '@angular/core';
import { IDevice } from '../device.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from '../service/device.service';
import { ActivatedRoute } from '@angular/router';
import { DEVICEACTION, DEVICETYPES } from 'app/config/device.constants';

const deviceTemplate = {} as IDevice;

@Component({
  selector: 'jhi-device-update',
  templateUrl: './device-update.component.html',
})
export class DeviceUpdateComponent implements OnInit {
  isSaving = false;
  deviceTypes = DEVICETYPES;
  deviceActions = DEVICEACTION;
  isCreating = false;

  editForm = new FormGroup({
    id: new FormControl(deviceTemplate.id),
    name: new FormControl(deviceTemplate.name, {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1), Validators.maxLength(50)],
    }),
    deviceType: new FormControl(deviceTemplate.deviceType, { nonNullable: true }),
    deviceAction: new FormControl(deviceTemplate.deviceAction, { nonNullable: true }),
  });

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ device }) => {
      if (device) {
        console.log('edit device');
        console.log(device);
        this.isCreating = false;
        this.editForm.reset(device);
      } else {
        console.log('create new device');
        this.isCreating = true;
        this.editForm.reset();
      }
    });
  }

  save(): void {
    this.isSaving = true;
    const device = this.editForm.getRawValue();
    if (device.id !== null) {
      this.deviceService.update(device).subscribe({
        next: () => this.onSaveSuccess(),
        error: () => this.onSaveError(),
      });
    } else {
      this.deviceService.create(device).subscribe({
        next: () => this.onSaveSuccess(),
        error: () => this.onSaveError(),
      });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}
