export interface IDeviceMonitor {
  id: string | null;
  value?: string;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class DeviceMonitor implements IDeviceMonitor {
  constructor(
    public id: string | null,
    public value?: string,
    public createdBy?: string,
    public createdDate?: Date,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Date
  ) {}
}
