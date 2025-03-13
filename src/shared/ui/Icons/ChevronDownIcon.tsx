import IconWrapper, { IconComponent } from './IconWrapper';

const ChevronDownIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 4.4306 8.5119 C 4.7001 8.1974 5.1736 8.161 5.4881 8.4306 L 12 14.0122 L 18.5119 8.4306 C 18.8264 8.161 19.2999 8.1974 19.5695 8.5119 C 19.839 8.8264 19.8026 9.2999 19.4881 9.5694 L 12.4881 15.5694 C 12.2072 15.8102 11.7928 15.8102 11.5119 15.5694 L 4.5119 9.5694 C 4.1974 9.2999 4.161 8.8264 4.4306 8.5119 Z"
      />
    </IconWrapper>
  );
};

export default ChevronDownIcon;
