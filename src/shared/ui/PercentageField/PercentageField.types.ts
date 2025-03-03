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
  enableCreateOption?: boolean;
}
