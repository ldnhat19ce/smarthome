import { IDeviceMonitor } from './device-monitor.model';

export interface IStatisticalDeviceMonitor {
  month: String;
  day: String;
  hour: String;
  minute: String;
  deviceMonitors: IDeviceMonitor[];
}

export class StatisticalDeviceMonitor implements IStatisticalDeviceMonitor {
  day: String = '';
  deviceMonitors: IDeviceMonitor[] = [];
  hour: String = '';
  minute: String = '';
  month: String = '';
}
