export class NumericInputCleaner {
  static clear(str) {
    return NumericInputCleaner._parse(str);
  }

  static _parse(str) {
    const minusIndex = str.indexOf('-');
    const pointIndex = str.indexOf('.');
    const length = str.length;

    let integerPart, decimalPart;
    if (pointIndex === -1 || pointIndex === length - 1) {
      integerPart = str;
      decimalPart = '';
    } else {
      integerPart = str.slice(0, pointIndex);
      decimalPart = str.slice(pointIndex + 1);
    }

    integerPart = NumericInputCleaner._clearNumber(integerPart);
    decimalPart = NumericInputCleaner._clearNumber(decimalPart);

    integerPart = NumericInputCleaner._removeZeros(integerPart);
    decimalPart = NumericInputCleaner._removeZeros(decimalPart, true);

    let resultNumber = integerPart || '0';
    if (decimalPart && decimalPart !== '0') {
      resultNumber += '.' + decimalPart;
    }

    return (minusIndex === 0 && resultNumber !== '0' ? '-' : '') + resultNumber;
  }

  static _clearNumber(str) {
    let result = '';
    for (const c of str) {
      if (NumericInputCleaner._isDigit(c)) result += c;
    }
    return result;
  }

  static _isDigit(chr) {
    return chr >= '0' && chr <= '9';
  }

  static _removeZeros(str, reverse = false) {
    if (!reverse) {
      let carryStart = 0;

      while (carryStart < str.length && str[carryStart] === '0') {
        carryStart++;
      }

      return str.slice(carryStart);
    } else {
      let carryEnd = str.length - 1;
      while (carryEnd >= 0 && str[carryEnd] === '0') {
        carryEnd--;
      }
      return str.slice(0, carryEnd + 1);
    }
  }
}
