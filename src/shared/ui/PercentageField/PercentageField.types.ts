export interface OptionProps {
  id?: string;
  name?: string;
}

export interface ItemProps {
  item?: OptionProps;
  percent?: number;
}

export interface PercentageFieldProps {
  name: string;
  options: OptionProps[];
  label: string;
  labelType: 'masculine' | 'feminine' | 'neuter';
  enableCreateOption?: boolean;
}

export const getLabelType = (labelType: 'masculine' | 'feminine' | 'neuter') => {
  switch (labelType) {
    case 'feminine':
      return 'Связанная';
    case 'masculine':
      return 'Связанный';
    default:
      return 'Связанное';
  }
};
