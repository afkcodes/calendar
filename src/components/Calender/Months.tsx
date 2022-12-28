import React from 'react';
import Button from '../Button';
import { months } from './helper/helper.calender';

interface MonthsPropType {
  month: number;
  year: number;
  setMonth: Function;
  setYear: Function;
  onMonthClick: () => void;
}

const Months: React.FC<MonthsPropType> = ({
  month,
  year,
  setMonth,
  setYear,
  onMonthClick,
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
          type='ICON'
          handleClick={() => handleMonthChange('previous')}
          iconName='previous'
          iconSize={20}
        />
        <Button
          type='TEXT'
          style='font-semibold text-base text-gray-600'
          handleClick={onMonthClick}
          text={months[month]}
        />
        <Button
          type='ICON'
          handleClick={() => handleMonthChange('next')}
          iconName='next'
          iconSize={20}
        />
      </div>
    </div>
  );
};

export default Months;
