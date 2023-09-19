import { Minor } from "./minor.js";

export class Determinant {
  constructor(arrMatrix) {
    this.arrMatrix = arrMatrix;
  }

  getDeterminant() {
    return this._determinant(this.arrMatrix);
  }

  _determinant(matrix) {
    if (matrix.length == 1) {
      return matrix[0][0];
    }

    let result = 0;
    for (let j = 0; j < matrix[0].length; ++j) {
      result += matrix[0][j] * this._determinant(Minor.getMinor(matrix, 0, j)) * (j % 2 === 0? 1 : -1);
    }

    return result;
  }
}