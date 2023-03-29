import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Device} from "../../device.model";
import {FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'jhi-device-timer-modal',
  templateUrl: './device-timer-modal.component.html'
})
export class DeviceTimerModalComponent implements OnInit {
  device? : Device;
  public showSpinners = true;
  public showSeconds = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public disabled = false;
  public touchUi = false;
  public enableMeridian = false;

  @ViewChild('picker') picker: any;

  // public formGroup = new FormGroup({
  //   date: new FormControl(null, [Validators.required]),
  //   date2: new FormControl(null, [Validators.required])
  // })

  public dateControl = new FormControl(new Date(2021,9,4,5,6,7));

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  dismiss(): void {
    this.activeModal.dismiss();
  }
}
