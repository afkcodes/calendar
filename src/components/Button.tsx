import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const buttonIconMap: any = {
  next: FiChevronRight,
  previous: FiChevronLeft,
};

interface IconButtonProps {
  type: string;
  handleClick: () => void;
  iconSize: number;
}

const Button: React.FC<IconButtonProps> = ({ handleClick, type, iconSize }) => {
  const icon = React.createElement(buttonIconMap[type], { size: iconSize });
  return (
    <button
      className='h-6 w-6 flex items-center justify-center
          hover:bg-[#D80000] hover:text-white rounded-full 
          cursor-pointer transition-all duration-200 ease-in-out
          outline-[#D80000]'
      tabIndex={0}
      onClick={handleClick}
      name='previous month'
      aria-label='previous month'>
      <>{icon}</>
    </button>
  );
};

export default Button;
