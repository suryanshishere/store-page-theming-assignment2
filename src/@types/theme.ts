export type Direction = 'ltr' | 'rtl';
export type Mode = 'light' | 'dark';
export type ControlSize = 'lg' | 'md' | 'sm';
export type LayoutType =
  | 'blank'
  | 'collapsibleSide'
  | 'stackedSide'
  | 'topBarClassic'
  | 'framelessSide'
  | 'contentOverlay';

// New: specialty themes
export type Specialty = 'default' | 'theme1' | 'theme2';

export type Theme = {
  themeSchema: string;
  direction: Direction;
  mode: Mode;
  panelExpand: boolean;
  controlSize: ControlSize;
  layout: {
    type: LayoutType;
    sideNavCollapse: boolean;
    previousType?: LayoutType | '';
  };
  specialty: Specialty;
};