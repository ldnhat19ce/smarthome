export interface IDevice {
  id: string | null;
  name?: string;
  unitMeasure?: string;
  deviceType?: string | null;
  deviceAction?: string;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class Device implements IDevice {
  constructor(
    public id: string | null,
    public name?: string,
    public unitMeasure?: string,
    public deviceType?: string | null,
    public deviceAction?: string,
    public createdBy?: string,
    public createdDate?: Date,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Date
  ) {}
}

export interface IDeviceDTO {
  id: string | null;
  deviceType?: string | null;
  deviceAction?: string | null | undefined;
}

export class DeviceDTO implements IDeviceDTO {
  constructor(public id: string | null, public deviceType?: string | null, public deviceAction?: string | null | undefined) {}
}
