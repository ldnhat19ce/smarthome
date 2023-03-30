import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Device} from "../../device.model";
import {FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";

@Component({
  selector: 'jhi-device-timer-modal',
  templateUrl: './device-timer-modal.component.html'
})
export class DeviceTimerModalComponent implements OnInit {
  device? : Device;

  form: FormGroup = this.formbuilder.group({
    dateRange: new FormControl([new Date(2023, 2, 17), new Date(2023, 2, 30)]),
  });

  constructor(private activeModal: NgbActiveModal,
              private formbuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  reset() {
    console.log(this.form.value);
    this.form.reset({
      eventName: '',
      dateRange: new FormControl([]),
    });

    console.log(this.form.value);
  }

  dismiss(): void {
    this.activeModal.dismiss();
  }
}
