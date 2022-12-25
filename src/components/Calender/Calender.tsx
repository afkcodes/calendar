import React, { useState } from 'react';
import { getInitialCalenderDate } from './helper/helper.calender';
import Dates from './Dates';
import Months from './Months';
import { DateType } from './types/types';
import Weeks from './Weeks';
import Years from './Years';

interface CalenderPropsType {
  selectedDate: DateType;
  onDateSelect: Function;
}

const Calender: React.FC<CalenderPropsType> = ({
  onDateSelect,
  selectedDate,
}) => {
  const [month, setMonth] = useState(getInitialCalenderDate().month);
  const [year, setYear] = useState(getInitialCalenderDate().year);

  return (
    <div className='flex flex-col w-96 h-80 '>
      <div className='flex flex-col items-center p-4 rounded-md shadow-md'>
        <div className='flex w-full border-b '>
          <Months
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
          />
          <Years year={year} setYear={setYear} />
        </div>
        <Weeks />
        <Dates
          month={month}
          year={year}
          onDateSelect={onDateSelect}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  );
};

export default Calender;
