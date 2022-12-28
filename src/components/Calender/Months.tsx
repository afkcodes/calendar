import React from 'react';
import { months } from './helper/helper.calender';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Button from '../Button';

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
        <Button
          handleClick={() => handleMonthChange('previous')}
          type='previous'
          iconSize={20}
        />
        <p className='font-semibold text-base text-gray-600'>{months[month]}</p>
        <Button
          handleClick={() => handleMonthChange('next')}
          type='next'
          iconSize={20}
        />
      </div>
    </div>
  );
};

export default Months;
