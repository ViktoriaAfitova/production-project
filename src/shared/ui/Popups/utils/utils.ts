import { DropdownDirection } from '../../../types/direction';
import style from '../Popup.module.scss';

export const directionMapper: Record<DropdownDirection, string> = {
  'bottom left': style.optionsBottomLeft,
  'bottom right': style.optionsBottomRight,
  'top right': style.optionsTopRight,
  'top left': style.optionsTopLeft,
};
