import React from 'react';
import Button from '../Button';
import { months } from './helper/helper.calender';

interface MonthViewProps {
  onMonthClick: () => void;
  setMonth: Function;
}

const MonthView: React.FC<MonthViewProps> = ({ onMonthClick, setMonth }) => {
  return (
    <ul className='grid grid-cols-3 grid-rows-4 border-t border-r border-gray-400'>
      {Object.keys(months).map((month, idx: number) => (
        <li
          className='cursor-pointer hover:bg-[#D80000]
          text-gray-600 hover:text-white border-b border-l border-1 border-gray-400'
          key={`MONTH_VIEW_${months[month]}_${month}_${idx}`}>
          <Button
            type='TEXT'
            text={months[month]}
            handleClick={() => {
              onMonthClick();
              setMonth(parseInt(month));
            }}
            style='w-full px-4 py-4'
          />
        </li>
      ))}
    </ul>
  );
};

export default MonthView;
