import { ConvertUtil } from './convert.util';
import { IStatisticalDeviceMonitor } from '../../user/device/statistical-device-monitor.model';

export class CommonUtils {
  static mapXY(statisticalDeviceMonitors: IStatisticalDeviceMonitor[]) {
    let xyConverter: { x: String; y: String }[] = [];

    statisticalDeviceMonitors.forEach(v => {
      v.deviceMonitors.forEach(item => {
        xyConverter.push({ x: ConvertUtil.convertToString(item.createdDate), y: ConvertUtil.convertToString(item.value) });
      });
    });
    return xyConverter;
  }
}
