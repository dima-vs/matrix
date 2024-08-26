export class Minor {
  static getMinor(arrMatrix, row, column) {
    const minorMatrix = arrMatrix
      .filter((_, i) => i !== row)
      .map(rowArr => rowArr.filter((_, j) => j !== column));

    return minorMatrix;
  }
}