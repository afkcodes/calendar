import React from 'react';
import Button from '../Button';
import { getInitialCalenderDate } from './helper/helper.calender';
import { DateType } from './types/types';

interface CellPropsType {
  date: number;
  month: number;
  year: number;
  type: string;
  dateString: string;
  epochDate: number;
  selectedDate: DateType;
  onDateSelect: Function;
  isHoliday?: boolean;
  holidayReason?: string;
}

const Cell: React.FC<CellPropsType> = ({
  date,
  month,
  year,
  type,
  isHoliday,
  holidayReason,
  dateString,
  epochDate,
  selectedDate,
  onDateSelect,
}) => {
  const isPreviousOrNext = type === 'previous' || type === 'next';
  const isToday = type === 'today';
  const todaysDate = getInitialCalenderDate().date;

  const isSelectedDate =
    selectedDate?.date?.date === date &&
    selectedDate?.date?.month === month &&
    selectedDate?.date?.year === year;

  const handleDateSelect = () => {
    if (onDateSelect) {
      onDateSelect({
        date: { date, month, year },
        type,
        epochDate,
        dateString,
        isHoliday,
        holidayReason,
      });
    }
  };

  return (
    <li>
      <Button
        type='TEXT'
        handleClick={handleDateSelect}
        style={`flex justify-center items-center w-9 h-9 cursor-pointer 
        rounded-full text-gray-600 hover:bg-[#D80000] hover:text-white 
      
        ${
          isHoliday && !isPreviousOrNext && !isSelectedDate
            ? 'bg-yellow-500 text-gray-700'
            : ''
        }

        ${
          isToday
            ? selectedDate?.date?.date &&
              selectedDate?.date?.date !== todaysDate
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
        isDisabled={isPreviousOrNext}
        text={date}
      />
    </li>
  );
};

export default Cell;
