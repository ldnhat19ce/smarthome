import { Device2Model } from '../device/device2.model';

export interface INewsModel {
  id: string;
  message: string;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
  deviceDTO?: Device2Model;
}

export class NewsModel implements INewsModel {
  constructor(public id: string, public message: string) {}
}
