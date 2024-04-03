import { NumericInputCleaner } from "./numericInputCleaner.js";

export class NumericInputEvents {
  static addEvents() {
    document.addEventListener("focusin", NumericInputEvents.onInputFocus);
    document.addEventListener("focusout", NumericInputEvents.onInputBlur);
    document.addEventListener("keydown", NumericInputEvents.onKeyDown);
  }

  static onKeyDown(evt) {
    const isContains = evt.target.classList.contains("numeric-input");
    if (!isContains) return;

    const key = evt.key;
    if (!((key >= '0' && key <= '9') || key === '-' || key === '.' || NumericInputEvents.allowedKeys.includes(key) ||
      (evt.keyCode >= 37 && evt.keyCode <= 49)))

      evt.preventDefault();
  }

  static onInputFocus(evt) {
    const isContains = evt.target.classList.contains("numeric-input");
    if (!isContains) return;

    const target = evt.target;
    
    if (target?.value === "0") target.value = "";
    else target?.select();
  }

  static onInputBlur(evt) {
    const isContains = evt.target.classList.contains("numeric-input");
    if (!isContains) return;

    const target = evt.target;

    if (target?.value === "")target.value = "0";
    else target.value = NumericInputCleaner.clear(target.value);
    
  }
}

NumericInputEvents.allowedKeys = ["Delete", "Backspace"];
