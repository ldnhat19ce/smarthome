import { Device2Model } from './device/device2.model';

export interface IDeviceMonitor2Model {
  id: string;
  value: string;
  unitMeasure: string;
  deviceDTO?: Device2Model;
  createdBy: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
}

export class DeviceMonitor2Model implements IDeviceMonitor2Model {
  createdBy: string = '';
  createdDate: Date = new Date();
  deviceDTO: Device2Model = {} as Device2Model;
  id: string = '';
  lastModifiedBy: string = '';
  lastModifiedDate: Date = new Date();
  unitMeasure: string = '';
  value: string = '';
}
