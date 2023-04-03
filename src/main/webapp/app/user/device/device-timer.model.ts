import { DeviceDTO } from './device.model';

export interface IDeviceTimer {
  id: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  deviceDTO?: DeviceDTO | null;
  deviceAction?: string;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class DeviceTimer implements IDeviceTimer {
  constructor(
    public id: string | null,
    public startTime?: Date | null,
    public endTime?: Date | null,
    public deviceDTO?: DeviceDTO | null,
    public deviceAction?: string,
    public createdBy?: string,
    public createdDate?: Date,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Date
  ) {}
}
