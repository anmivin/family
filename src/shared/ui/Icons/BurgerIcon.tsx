import IconWrapper, { IconComponent } from './IconWrapper';

const BurgerIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props} isLineIcon>
      <path d="M20 7L4 7" />
      <path d="M 20 12 L 9 12" />
      <path d="M 20 17 H 15" />
    </IconWrapper>
  );
};

export default BurgerIcon;
