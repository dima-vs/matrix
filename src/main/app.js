import { InitButtons } from '../operations/initButtons.js';
import { NumericInputEvents } from './numericInputEvents.js';
import { ShowPrompt } from './showPrompt.js';
import { CheckProperties } from '../operations/unaryOperation/main/checkProperties.js';
import { Add } from '../operations/binaryOperation/main/add.js';
import { Mult } from '../operations/binaryOperation/main/mult.js';

export class App {
  start() {
    this._init();
    this._addButtonEvents();
    this._activateDefaultOperation();
  }

  _init() {
    this.menuButtons = {};
    this.currentOperation;
    this.currentActiveButton;
    this.menuOptions = document.getElementById('menu-options');
    InitButtons.init();
    NumericInputEvents.addEvents();
    const sp = new ShowPrompt();
    sp.init();
  }

  _activateDefaultOperation() {
    this.menuButtons.matrix.click();
  }

  _addButtonEvents() {
    this._initMatrixButton();
    this._initAddButton();
    this._initMulButton();
  }

  _initMatrixButton() {
    const button = this._getButton('matrix');
    this.menuButtons.matrix = button;
    this._addButtonOnClickEvent(button, CheckProperties);
  }

  _initAddButton() {
    const button = this._getButton('add');
    this.menuButtons.add = button;
    this._addButtonOnClickEvent(button, Add);
  }

  _initMulButton() {
    const button = this._getButton('mul');
    this.menuButtons.mul = button;
    this._addButtonOnClickEvent(button, Mult);
  }

  _addButtonOnClickEvent(button, operation) {
    button.addEventListener('click', () => {
      if (button.classList.contains('active')) return;

      this.currentActiveButton?.classList.toggle('active');
      button.classList.add('active');
      this.currentActiveButton = button;

      this.currentOperation?.clear();
      this.currentOperation = new operation();
    });
  }

  _getButton(value) {
    return this.menuOptions.querySelector(`button[value="${value}"]`);
  }
}
