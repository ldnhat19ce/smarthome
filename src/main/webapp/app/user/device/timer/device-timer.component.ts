import { Component, OnInit } from '@angular/core';
import {Device} from "../device.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'jhi-device-timer',
  templateUrl: './device-timer.component.html'
})
export class DeviceTimerComponent implements OnInit {
  device? : Device;
  form: FormGroup = this.formbuilder.group({
    dateRange: new FormControl([new Date(2023, 2, 17), new Date(2023, 2, 30)]),
  });

  constructor(private formbuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({device}) => {
      this.device = device;
    });
  }

  reset() {
    console.log(this.form.value);
    this.form.reset({
      eventName: '',
      dateRange: new FormControl([]),
    });

    console.log(this.form.value);
  }
}
