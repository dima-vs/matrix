import { DropDownPanelEvents } from './dropDawnPanelEvents.js';

export class DropDownPanel {
  static getPanel(title, contentElem) {
    return this.#_createPanel(title, contentElem);
  }

  static #_createPanel(titleText, contentElem) {
    const panel = document.createElement('div');
    const title = document.createElement('div');
    const content = document.createElement('div');
    const contentContainer = document.createElement('div');

    panel.classList.add('drop-down-panel');
    title.classList.add('title');
    content.classList.add('content');
    contentContainer.classList.add('content-container');

    title.textContent = titleText;
    content.append(contentContainer);
    contentContainer.append(contentElem);

    panel.append(title);
    panel.append(content);

    DropDownPanelEvents.showOrHidePanel({ title, panel, content });

    return panel;
  }
}
