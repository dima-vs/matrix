export class DropDownPanelEvents {
  static showOrHidePanel({ title, panel, content }) {
    title.addEventListener('click', (_) => {
      if (panel.classList.contains('active')) {
        content.style.height = '0px';
        content.style.overflow = 'hidden';
      } else {
        const contentHeight = content.scrollHeight;

        content.style.height = contentHeight + 'px';
        content.style.overflow = '';
      }
      panel.classList.toggle('active');
    });
  }
}
