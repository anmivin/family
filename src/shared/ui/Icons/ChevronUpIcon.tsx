import IconWrapper, { IconComponent } from './IconWrapper';

const ChevronUpIcon: IconComponent = (props) => {
  return (
    <IconWrapper {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 19.5694 15.4881 C 19.2999 15.8026 18.8264 15.839 18.5119 15.5694 L 12 9.9878 L 5.4881 15.5694 C 5.1736 15.839 4.7001 15.8026 4.4305 15.4881 C 4.161 15.1736 4.1974 14.7001 4.5119 14.4306 L 11.5119 8.4306 C 11.7928 8.1898 12.2072 8.1898 12.4881 8.4306 L 19.4881 14.4306 C 19.8026 14.7001 19.839 15.1736 19.5694 15.4881 Z"
      />
    </IconWrapper>
  );
};

export default ChevronUpIcon;
