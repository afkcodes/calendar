import React from 'react';
import { weekDays } from './helper/helper.calender';

const Weeks = () => {
  return (
    <div className='flex justify-between w-full mt-1'>
      {weekDays.map((day: string, idx: number) => (
        <p
          className='font-semibold text-base text-gray-600'
          key={`DAY_WEEK_${day}_${idx}`}>
          {day}
        </p>
      ))}
    </div>
  );
};

export default Weeks;
