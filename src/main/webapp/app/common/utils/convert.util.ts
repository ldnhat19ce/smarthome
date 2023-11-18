import { ValidationUtil } from './validation.util';

export class ConvertUtil {
  static convertToZeroDecimal(value: String | Number): string {
    if (ValidationUtil.isNullOrEmpty(value)) return '';

    let _number = +value;

    if (_number < 10) return '0' + _number;

    return _number.toString();
  }

  static convertToString(value: any): string {
    if (ValidationUtil.isNotNullAndNotEmpty(value)) {
      if (typeof value === 'string') {
        return value;
      } else {
        return value.toString();
      }
    }

    return '';
  }

  static setComma(value: String | Number): string {
    if (ValidationUtil.isNotNullAndNotEmpty(value)) {
      if (typeof value !== 'string') {
        value = value.toString();
      }

      let result = value + '';
      let regex = /(^[+-]?\d+)(\d{3})/;
      while (regex.test(result)) {
        result = result.replace(regex, '$1' + ',' + '$2');
      }

      return result;
    }

    return '0';
  }

  static convertToIntValue(_string: string) {
    return parseInt(_string.replace(/,/g, ''), 10);
  }
}
