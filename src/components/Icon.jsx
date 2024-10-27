import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

const icons = {
  Facebook: FaFacebook,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
};

export const Icon = ({ name, size = 36, className = '', padding = 4 }) => {
  const ReactIcon = icons[name];
  const iconProps = {
    size: size,
    className: className,
    style: {
      padding: padding,
    },
  };

  return <ReactIcon {...iconProps} />;
};

export default Icon;
