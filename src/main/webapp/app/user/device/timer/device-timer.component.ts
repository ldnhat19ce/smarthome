import { Component, OnInit } from '@angular/core';
import { Device, DeviceDTO, IDeviceDTO } from '../device.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeviceTimerService } from '../service/device-timer.service';
import { DeviceTimer, IDeviceTimer } from '../device-timer.model';
import { DEVICEACTION } from '../../../config/device.constants';

@Component({
  selector: 'jhi-device-timer',
  templateUrl: './device-timer.component.html',
})
export class DeviceTimerComponent implements OnInit {
  isSaving = false;
  device?: Device;
  deviceActions = DEVICEACTION;

  form: FormGroup = this.formbuilder.group({
    time: new FormControl(new Date()),
    deviceAction: new FormControl(this.deviceActions[0], { nonNullable: true }),
  });

  constructor(private formbuilder: FormBuilder, private activatedRoute: ActivatedRoute, private deviceTimerService: DeviceTimerService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ device }) => {
      this.device = device;
    });
  }

  save(): void {
    this.isSaving = true;
    const result = this.form.getRawValue();
    const deviceDTO: IDeviceDTO = new DeviceDTO(this.device?.id!!, null, null);
    let time = result.time.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' });
    const deviceTimer: IDeviceTimer = new DeviceTimer(null, result.time, deviceDTO, result.deviceAction);
    this.deviceTimerService.create(deviceTimer).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  previousState(): void {
    window.history.back();
  }

  reset() {
    console.log(this.form.value);
    this.form.reset({
      eventName: '',
      dateSingleStart: new FormControl(),
      dateSingleEnd: new FormControl(),
    });

    console.log(this.form.value);
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}
