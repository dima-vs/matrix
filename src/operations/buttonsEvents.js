export class ButtonEvents {
  static mouseMove(evt) {
    const target = evt.target;
    const button = target.closest('button');

    if (!button) return;

    const x = evt.offsetX;
    const y = evt.offsetY;
    button.style.setProperty('--mouse-x', x + 'px');
    button.style.setProperty('--mouse-y', y + 'px');
  }
}
