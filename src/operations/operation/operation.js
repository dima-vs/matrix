export class Operation {
  constructor() {
    this.container = this._createContainer();
    this.operandsContainer = this._createOperandsContainer();
  }

  clear() {
    this.container?.remove();
  }

  _createContainer() {
    const container = document.createElement('div');
    container.classList.add('container');

    const main = document.getElementById('main');
    main.append(container);

    return container;
  }

  _createOperandsContainer() {
    const operandsContainer = document.createElement('div');
    operandsContainer.classList.add('operands-container');
    operandsContainer.addEventListener('click', () => {
      const panel = document.querySelector('.drop-down-panel');
      const title = panel.querySelector('.title');

      title.addEventListener('click', (evt) => {
        const content = panel.querySelector('.content');
        const contentHeight = content.scrollHeight;

        if (panel.classList.contains('active')) {
          content.style.height = '0px';
          content.style.overflow = 'hidden';
        } else {
          content.style.height = contentHeight + 'px';
          content.style.overflow = '';
        }

        panel.classList.toggle('active');
      });
    });

    this.container.append(operandsContainer);
    return operandsContainer;
  }

  _updateResults() {
    this.results?.remove();
    this.results = this._createResultsContainer();
  }

  _createResultsContainer() {
    const results = document.createElement('div');
    results.classList.add('results');

    this.container.append(results);
    return results;
  }
}
