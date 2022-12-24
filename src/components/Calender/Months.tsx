import React from 'react';
import { months } from '../../utils/helper.calender';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

interface MonthsPropType {
  month: number;
  year: number;
  setMonth: Function;
  setYear: Function;
}

const Months: React.FC<MonthsPropType> = ({
  month,
  year,
  setMonth,
  setYear,
}) => {
  const handleMonthChange = (type: string) => {
    if (type === 'next') {
      setMonth(month + 1);
      if (month === 12) {
        setMonth(1);
        setYear(year + 1);
      }
    } else {
      setMonth(month - 1);
      if (month === 1) {
        setMonth(12);
        setYear(year - 1);
      }
    }
  };

  return (
    <div className='w-full flex flex-1 justify-between mb-1 mr-1'>
      <div className='w-full flex justify-between items-center rounded mb-1'>
        <button
          className='h-6 w-6 flex items-center justify-center
          hover:bg-[#D80000] hover:text-white rounded-full 
          cursor-pointer transition-all duration-200 ease-in-out'
          tabIndex={0}
          onClick={() => handleMonthChange('previous')}>
          <FiChevronLeft size={20} />
        </button>
        <p className='font-semibold text-base text-gray-600'>{months[month]}</p>
        <button
          className='h-6 w-6 flex items-center justify-center
          hover:bg-[#D80000] hover:text-white rounded-full 
          cursor-pointer transition-all duration-200 ease-in-out'
          tabIndex={0}
          onClick={() => handleMonthChange('next')}>
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Months;
