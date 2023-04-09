export interface IDeviceToken {
  id: string | null;
  token?: string;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class DeviceToken implements IDeviceToken {
  constructor(
    public id: string | null,
    public token?: string,
    public createdBy?: string,
    public createdDate?: Date,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Date
  ) {}
}
