export interface IDeviceMonitor {
  id: string | null;
  value?: string;
  unitMeasure?: string | null;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class DeviceMonitor implements IDeviceMonitor {
  constructor(
    public id: string | null,
    public value?: string,
    public unitMeasure?: string | null,
    public createdBy?: string,
    public createdDate?: Date,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Date
  ) {
  }
}
