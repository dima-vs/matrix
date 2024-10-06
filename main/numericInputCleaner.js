// export class NumericInputCleaner {
//   static clear(str) {
//     let result = "";
    
//     for (const c of str) {
//       if (NumericInputCleaner._isDigit(c))
//         result += c;
//     }

//     return NumericInputCleaner._removeZeros(result) || "0";
//   }

//   static _isDigit(chr) {
//     return (chr >= '0' && chr <= '9');
//   }

//   static _removeZeros(str) {
//     let carry = 0;

//     for (const c of str) {
//       if (c == 0)
//         carry++;
//       else
//         break;
//     }

//     const slice = str.slice(carry);
//     return slice;
//   }
// }

// export class NumericInputCleaner {
//   static clear(str) {
//     let result = "";
//     let hasDecimalPoint = false;
//     let isNegative = false;

//     for (const c of str) {
//       if (c === '-') {
//         if (result.length === 0 && !isNegative) {
//           isNegative = true;
//         } else {
//           // Ignore the '-' symbol if it's not at the beginning
//           continue;
//         }
//       } else if (c === '.' && !hasDecimalPoint) {
//         hasDecimalPoint = true;
//         result += c;
//       } else if (NumericInputCleaner._isDigit(c)) {
//         result += c;
//       }
//     }

//     // Remove leading zeros except for a single zero before a decimal point
//     result = NumericInputCleaner._removeLeadingZeros(result);

//     // Remove trailing zeros after the decimal point
//     result = NumericInputCleaner._removeTrailingZeros(result);

//     // If the result is empty, set it to zero
//     return result.length > 0 ? (isNegative ? '-' : '') + result : "0";
//   }

//   static _isDigit(chr) {
//     return (chr >= '0' && chr <= '9');
//   }

//   static _removeLeadingZeros(str) {
//     let i = 0;
//     while (i < str.length && str[i] === '0' && str[i + 1] !== '.') {
//       i++;
//     }
//     return str.slice(i);
//   }

//   static _removeTrailingZeros(str) {
//     let i = str.length - 1;
//     while (i >= 0 && str[i] === '0' && str[i - 1] !== '.') {
//       i--;
//     }
//     return str.slice(0, i + 1);
//   }
// }

// export class NumericInputCleaner {
//   static clear(str) {
//     let result = "";
//     let hasDecimalPoint = false;
//     let isNegative = false;
//     let hasIntegerPart = false;

//     for (const c of str) {
//       if (c === '-') {
//         if (result.length === 0 && !isNegative) {
//           isNegative = true;
//         } else {
//           // Ignore the '-' symbol if it's not at the beginning
//           continue;
//         }
//       } else if (c === '.' && !hasDecimalPoint) {
//         hasDecimalPoint = true;
//         result += c;
//       } else if (NumericInputCleaner._isDigit(c)) {
//         result += c;
//         if (!hasDecimalPoint) {
//           hasIntegerPart = true;
//         }
//       }
//     }

//     // If there's no integer part, add a leading zero
//     if (!hasIntegerPart && hasDecimalPoint) {
//       result = "0" + result;
//     }

//     // Remove leading zeros except for a single zero before a decimal point
//     result = NumericInputCleaner._removeLeadingZeros(result);

//     // Remove trailing zeros after the decimal point
//     result = NumericInputCleaner._removeTrailingZeros(result);

//     // If the result is empty, set it to zero
//     return result.length > 0 ? (isNegative ? '-' : '') + result : "0";
//   }

//   static _isDigit(chr) {
//     return (chr >= '0' && chr <= '9');
//   }

//   static _removeLeadingZeros(str) {
//     let i = 0;
//     while (i < str.length && str[i] === '0' && str[i + 1] !== '.') {
//       i++;
//     }
//     return str.slice(i);
//   }

//   static _removeTrailingZeros(str) {
//     let i = str.length - 1;
//     while (i >= 0 && str[i] === '0' && str[i - 1] !== '.') {
//       i--;
//     }
//     return str.slice(0, i + 1);
//   }
// }


export class NumericInputCleaner {
  static clear(str) {
    // let result = "";



    // for (const c of str) {
    //   if (NumericInputCleaner._isDigit(c))
    //     result += c;
    // }

    // return NumericInputCleaner._removeZeros(result) || "0";
    return NumericInputCleaner._parse(str);
  }

  static _parse(str) {
    const minusIndex = str.indexOf("-");
    const pointIndex = str.indexOf(".");
    const length = str.length;

    let integerPart, decimalPart;
    if (pointIndex === -1 || pointIndex === length - 1) {
      integerPart = str;
      decimalPart = "";
    } else {
      integerPart = str.slice(0, pointIndex);
      decimalPart = str.slice(pointIndex + 1);
    }

    integerPart = NumericInputCleaner._clearNumber(integerPart);
    decimalPart = NumericInputCleaner._clearNumber(decimalPart);

    integerPart = NumericInputCleaner._removeZeros(integerPart);
    decimalPart = NumericInputCleaner._removeZeros(decimalPart, true);

    let resultNumber = integerPart || "0";
    if (decimalPart && decimalPart !== '0') {
      resultNumber += '.' + decimalPart;
    }

    return (minusIndex === 0 && resultNumber !== '0'? '-': '') + resultNumber;
  }

  static _clearNumber(str) {
    let result = "";
    for (const c of str) {
      if (NumericInputCleaner._isDigit(c))
        result += c;
    }
    return result;
  }

  static _isDigit(chr) {
    return (chr >= '0' && chr <= '9');
  }

  static _removeZeros(str, reverse=false) {
    if (!reverse) {
      let carryStart = 0;
  
      while (carryStart < str.length && str[carryStart] === '0') {
        carryStart++;
      }
  
      // for (const c of str) {
      //   if (c == '0')
      //     carry++;
      //   else
      //     break;
      // }
  
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