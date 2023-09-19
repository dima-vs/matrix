import { UnaryOperation } from "../unaryOperation.js";
import { DropDownPanel } from "../../../main/dropDownPanel/dropDownPanel.js";
import { MainProperties } from "./matrixProperties/mainProperties.js";
import { MainPropertiesTable } from "./mainPropertiesTable.js";
import { Determinant } from "./matrixOperations/determinant.js";
import { MatrixOperators } from "./matrixProperties/matrixOperators.js";

export class CheckProperties extends UnaryOperation {
  constructor() {
    super();

    this._init();
  }

  _init() {
    this.matrixInput = this.unaryContainer.matrixInput;
    this._initOperators();
  }

  _initOperators() {
    const matrixOperators = new MatrixOperators();
    this.matrixOperators = matrixOperators;
    this.operandsContainer.after(matrixOperators.getContainer());
    this._checkProperties();
  }

  _checkProperties() {
    const matrixOperators = this.matrixOperators;
    const button = matrixOperators.matrixOperatorsButtons.propertiesButton;
    button.addEventListener("click", () => {
      this._updateResults();
      const results = this.results;
      results.append(this._getPropertiesPanel());
      if (this.mainProperties.properties.isSquare) {
        results.append(this._getDeterminantPanel());
      }
    });
  }

  _getPropertiesPanel() {
    const matrixInput = this.matrixInput;
    const arrMatrix = matrixInput.load();

    const mainProperties = new MainProperties(arrMatrix);
    this.mainProperties = mainProperties;

    mainProperties.generateProperties();
    const propsTable = new MainPropertiesTable(mainProperties.properties);
    const table = propsTable.getTable();
    DropDownPanel.getPanel("Свойства");
    const dropDownPanel = DropDownPanel.getPanel("Результат", table);

    return dropDownPanel;
  }

  _getDeterminantPanel() {
    const matrixInput = this.matrixInput;
    const arrMatrix = matrixInput.load();

    const determinant = new Determinant(arrMatrix);
    const determinantValue = determinant.getDeterminant();

    const valueElem = document.createElement("div");
    valueElem.textContent = `Определитель: ${determinantValue}`;
    const panel = DropDownPanel.getPanel("Определитель", valueElem);
    
    return panel;
  }
}