export class MatrixOperators {
  constructor() {
    this.matrixOperatorsButtons = {};
  }

  getContainer() {
    return this._createOperatorsContainer();  
  }

  _createOperatorsContainer() {
    const operatorsContainer = document.createElement("div");
    operatorsContainer.classList.add("operators-container");

    operatorsContainer.append(this._createPropertiesButton());

    return operatorsContainer;
  }

  _createPropertiesButton() {
    const propertiesButton = document.createElement("button");
    propertiesButton.textContent = "Свойства";
    this.matrixOperatorsButtons.propertiesButton = propertiesButton;

    return propertiesButton;
  }
}