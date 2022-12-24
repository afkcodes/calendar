import React from 'react';
import { weekDays } from '../../utils/helper.calender';

const Weeks = () => {
  return (
    <div className='flex justify-between w-full mt-1'>
      {weekDays.map((day: string) => (
        <p
          className='font-semibold text-base text-gray-600'
          key={`DAY_WEEK_${Math.random()}`}>
          {day}
        </p>
      ))}
    </div>
  );
};

export default Weeks;
