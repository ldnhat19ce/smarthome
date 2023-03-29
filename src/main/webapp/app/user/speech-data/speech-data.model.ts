import {DeviceDTO} from "../device/device.model";

export interface ISpeechData {
  id: string | null;
  messageRequest?: string;
  messageResponse?: string;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class SpeechData implements ISpeechData {
  constructor(
    public id: string | null,
    public messageRequest?: string,
    public messageResponse?: string,
    public createdBy?: string,
    public createdDate?: Date,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Date
  ) {
  }
}

export interface ISpeechDataDTO {
  id: string | null;
  messageRequest?: string;
  messageResponse?: string;
  createdBy?: string | null;
  createdDate?: Date | null;
  lastModifiedBy?: string | null;
  lastModifiedDate?: Date | null;
  deviceDTO? : DeviceDTO | null;
}

export class SpeechDataDTO implements ISpeechDataDTO {
  constructor(
    public id: string | null,
    public messageRequest?: string,
    public messageResponse?: string,
    public createdBy?: string | null,
    public createdDate?: Date | null,
    public lastModifiedBy?: string | null,
    public lastModifiedDate?: Date | null,
    public deviceDTO? : DeviceDTO | null
  ) {
  }
}
