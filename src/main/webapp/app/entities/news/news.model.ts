export interface INewsModel {
  id: string;
  message: string;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class NewsModel implements INewsModel {
  constructor(public id: string, public message: string) {}
}
