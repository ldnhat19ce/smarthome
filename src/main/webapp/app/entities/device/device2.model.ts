export interface IDevice2Model {
  id: string;
  name: string;
  deviceType: string;
  deviceAction: string;
  createdBy: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
}

export class Device2Model implements IDevice2Model {
  createdBy: string = '';
  createdDate: Date = new Date();
  deviceAction: string = '';
  deviceType: string = '';
  id: string = '';
  lastModifiedBy: string = '';
  lastModifiedDate: Date = new Date();
  name: string = '';
}
