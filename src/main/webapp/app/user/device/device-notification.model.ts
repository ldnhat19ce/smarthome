import { DeviceDTO } from './device.model';

export interface INotificationSetting {
  id: string | null;
  value?: string | null;
  title?: string | null;
  message?: string | null;
  deviceDTO?: DeviceDTO | null;
  deviceAction?: string;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class NotificationSetting implements INotificationSetting {
  constructor(
    public id: string | null,
    public value?: string | null,
    public title?: string | null,
    public message?: string | null,
    public deviceDTO?: DeviceDTO | null,
    public deviceAction?: string,
    public createdBy?: string,
    public createdDate?: Date,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Date
  ) {}
}
