import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ISpeechDataDTO, SpeechDataDTO} from "../speech-data.model";
import {SpeechDataService} from "../service/speech-data.service";
import {ActivatedRoute} from "@angular/router";
import {DeviceService} from "../../device/service/device.service";
import {DEVICEACTION} from "../../../config/device.constants";
import {Device, DeviceDTO, IDevice, IDeviceDTO} from "../../device/device.model";

const speechDataTemplate = {} as ISpeechDataDTO;

@Component({
  selector: 'jhi-speech-data-update',
  templateUrl: './speech-data-update.component.html'
})
export class SpeechDataUpdateComponent implements OnInit {
  isSaving = false;
  deviceActions = DEVICEACTION;
  devices: Device[] | null = null;
  isCreating = false;

  editForm = new FormGroup({
    id: new FormControl(speechDataTemplate.id),
    messageRequest: new FormControl(speechDataTemplate.messageRequest, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
        // Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
      ],
    }),
    messageResponse: new FormControl(speechDataTemplate.messageResponse, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(100)
      ]
    }),
    deviceId: new FormControl("Device", {nonNullable: true}),
    deviceAction: new FormControl("ON", {nonNullable: true}),
    deviceType: new FormControl("CONTROL")
  });

  constructor(private speechDataService: SpeechDataService,
              private deviceService: DeviceService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({speechData}) => {
      if (speechData) {
        console.log("edit speechData")
        this.isCreating = false;
        this.editForm.reset(speechData);
      } else {
        this.isCreating = true;
        console.log("create new speechData")
        this.editForm.reset();
      }
    });
    this.loadAll();
  }

  save(): void {
    this.isSaving = true;
    const speechData = this.editForm.getRawValue();
    const deviceDTO: IDeviceDTO = new DeviceDTO(speechData.deviceId, "CONTROL", speechData.deviceAction);
    const spData: ISpeechDataDTO = new SpeechDataDTO(
      speechData.id,
      speechData.messageRequest,
      speechData.messageResponse,
      null,
      null,
      null,
      null,
      deviceDTO
    );
    if (speechData.id !== null) {
      this.speechDataService.update(speechData).subscribe({
        next: () => this.onSaveSuccess(),
        error: () => this.onSaveError()
      });
    } else {
      this.speechDataService.create(spData).subscribe({
        next: () => this.onSaveSuccess(),
        error: () => this.onSaveError()
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

  loadAll(): void {
    this.deviceService.queryDeviceAction("CONTROL").subscribe({
      next: (res: IDevice[]) => {
        this.onSuccess(res);
      }
    })
  }

  private onSuccess(devices: Device[] | null): void {
    this.devices = devices;
    console.log(devices)
  }
}
