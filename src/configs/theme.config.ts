import { THEME_ENUM } from '@/constants/theme.constant';
import {
  Direction,
  Mode,
  ControlSize,
  LayoutType,
  Specialty,
} from '@/@types/theme';

export type ThemeConfig = {
  themeSchema: string;
  direction: Direction;
  mode: Mode;
  panelExpand: boolean;
  controlSize: ControlSize;
  layout: {
    type: LayoutType;
    sideNavCollapse: boolean;
  };
  specialty: Specialty;
};

export const themeConfig: ThemeConfig = {
  themeSchema: '',
  direction: THEME_ENUM.DIR_LTR,
  mode: THEME_ENUM.MODE_LIGHT,
  panelExpand: false,
  controlSize: 'md',
  layout: {
    type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
    sideNavCollapse: false,
  },
  specialty: 'default',
};