import IconWrapper, { IconComponent } from './IconWrapper';

const PlusIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props}>
      <path d="M 12.75 5 C 12.75 4.5858 12.4142 4.25 12 4.25 C 11.5858 4.25 11.25 4.5858 11.25 5 L 11.25 11.25 H 5 C 4.5858 11.25 4.25 11.5858 4.25 12 C 4.25 12.4142 4.5858 12.75 5 12.75 H 11.25 V 19 C 11.25 19.4142 11.5858 19.75 12 19.75 C 12.4142 19.75 12.75 19.4142 12.75 19 L 12.75 12.75 H 19 C 19.4142 12.75 19.75 12.4142 19.75 12 C 19.75 11.5858 19.4142 11.25 19 11.25 H 12.75 V 5 Z" />
    </IconWrapper>
  );
};

export default PlusIcon;
