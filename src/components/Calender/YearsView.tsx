import React from 'react';
import Button from '../Button';
import { createYearList } from './helper/helper.calender';

interface YearViewProps {
  year: number;
  setYear: Function;
  onYearClick: () => void;
}

const YearView: React.FC<YearViewProps> = ({ year, setYear, onYearClick }) => {
  const yearsList = createYearList(year, 20);
  return (
    <ul className='grid grid-cols-5 grid-rows-4 border-t border-r border-gray-400'>
      {yearsList.map((year, idx: number) => (
        <li
          className='cursor-pointer hover:bg-[#D80000]
          text-gray-600 hover:text-white border-b border-l border-1 border-gray-400'
          key={`YEARS_VIEW_${year}_${idx}`}>
          <Button
            type='TEXT'
            text={year}
            handleClick={() => {
              onYearClick();
              setYear(year);
            }}
            style='w-full px-4 py-4'
          />
        </li>
      ))}
    </ul>
  );
};

export default YearView;
