export class GoogleIconsProvider {
  static getIcon(iconName) {
    const iconElement = document.createElement('i');
    iconElement.classList.add('material-icons');
    iconElement.textContent = iconName;

    return iconElement;
  }
}
