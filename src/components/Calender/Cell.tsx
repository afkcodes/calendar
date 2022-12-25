import React from 'react';
import { getInitialCalenderDate } from '../../utils/helper.calender';
import { DateType } from './types';

interface CellPropsType {
  date: number;
  month: number;
  year: number;
  type: string;
  dateString: string;
  epochDate: number;
  selectedDate: DateType;
  onDateSelect: Function;
}

const Cell: React.FC<CellPropsType> = ({
  date,
  month,
  year,
  type,
  dateString,
  epochDate,
  selectedDate,
  onDateSelect,
}) => {
  const isPreviousOrNext = type === 'previous' || type === 'next';
  const isToday = type === 'today';
  const todaysDate = getInitialCalenderDate().date;

  const isSelectedDate =
    selectedDate.date.date === date &&
    selectedDate.date.month === month &&
    selectedDate.date.year === year;

  const handleDateSelect = () => {
    onDateSelect({
      date: { date, month, year },
      type,
      dateString,
      epochDate,
    });
  };

  return (
    <li>
      <button
        key={`DATES_${Math.random()}`}
        onClick={handleDateSelect}
        className={`flex justify-center items-center w-9 h-9 cursor-pointer 
        rounded-full text-gray-600 hover:bg-[#D80000] hover:text-white 
        transition-all duration-250 ease-in-out

        ${
          isToday
            ? selectedDate.date.date !== 0 &&
              selectedDate.date.date !== todaysDate
              ? 'bg-[#FFD3D3] text-gray-600'
              : 'bg-[#d80000] text-white'
            : ''
        }

        ${
          isPreviousOrNext
            ? 'bg-gray-200 pointer-events-none text-gray-500'
            : ''
        }

        ${isSelectedDate && !isPreviousOrNext ? 'bg-[#d80000] text-white' : ''}

        `}
        aria-disabled={isPreviousOrNext}>
        <p key={`DATES_${Math.random()}`} className='font-semibold text-base'>
          {date}
        </p>
      </button>
    </li>
  );
};

export default Cell;
