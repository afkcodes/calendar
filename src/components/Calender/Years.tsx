import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

interface YearsPropType {
  year: number;
  setYear: Function;
}

const Years: React.FC<YearsPropType> = ({ year, setYear }) => {
  const handleYearChange = (type: string) => {
    if (type === 'next') {
      setYear(year + 1);
    } else {
      setYear(year - 1);
    }
  };
  return (
    <section className='w-full flex flex-1 justify-between mb-1 ml-1'>
      <div className='w-full flex flex-1 justify-between items-center rounded mb-1 '>
        <button
          className='h-6 w-6 flex items-center justify-center
          hover:bg-[#D80000] hover:text-white rounded-full 
          cursor-pointer transition-all duration-200 ease-in-out'
          tabIndex={0}
          onClick={() => handleYearChange('previous')}>
          <FiChevronLeft size={20} />
        </button>
        <p className='font-semibold text-base text-gray-600'>{year}</p>
        <button
          className='h-6 w-6 flex items-center justify-center
          hover:bg-[#D80000] hover:text-white rounded-full
          cursor-pointer transition-all duration-200 ease-in-out'
          tabIndex={0}
          onClick={() => handleYearChange('next')}>
          <FiChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Years;
