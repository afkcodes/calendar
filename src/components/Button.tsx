import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const buttonIconMap: any = {
  next: FiChevronRight,
  previous: FiChevronLeft,
};

interface ButtonProps {
  type: 'ICON' | 'TEXT';
  handleClick: () => void;
  iconSize?: number;
  iconName?: string;
  text?: string | number;
  style?: string;
  isDisabled?: boolean;
}

const buttonStyleMap: any = {
  ICON: `flex items-center justify-center
          hover:bg-[#D80000] hover:text-white rounded-full`,
};

const createIcon = (iconName?: string, iconSize?: number) => {
  return React.createElement(buttonIconMap[iconName as any], {
    size: iconSize,
  });
};

const Button: React.FC<ButtonProps> = ({
  handleClick,
  type,
  iconSize,
  iconName,
  text,
  style,
  isDisabled,
}) => {
  const icon = type == 'ICON' ? createIcon(iconName, iconSize) : undefined;
  return (
    <button
      className={`
        cursor-pointer transition-all duration-200 ease-in-out outline-[#D80000]
        ${style ? style : buttonStyleMap[type]}
        `}
      onClick={handleClick}
      name={type}
      aria-label={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}>
      {type === 'ICON' ? (
        <>{icon}</>
      ) : (
        <p className='font-semibold text-base'>{text}</p>
      )}
    </button>
  );
};

export default Button;
