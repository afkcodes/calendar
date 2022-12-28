import React, { useState } from 'react';
import { getInitialCalenderDate, yearOffset } from './helper/helper.calender';
import Dates from './Dates';
import Months from './Months';
import { DateType } from './types/types';
import Weeks from './Weeks';
import Years from './Years';
import MonthView from './MonthsView';
import YearView from './YearsView';

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
  const [showMonthList, setShowMonthList] = useState(false);
  const [showYearList, setShowYearList] = useState(false);

  const offsetYear = yearOffset + year - 1;

  return (
    <div className='flex flex-col w-96 h-80 '>
      <div className='flex flex-col items-center p-4 rounded-md shadow-md'>
        {!showYearList && !showMonthList ? (
          <>
            <div className='flex w-full border-b '>
              <Months
                month={month}
                year={year}
                setMonth={setMonth}
                setYear={setYear}
                onMonthClick={() => {
                  setShowMonthList(true);
                }}
              />
              <Years
                year={year}
                setYear={setYear}
                onYearClick={() => {
                  setShowYearList(true);
                }}
              />
            </div>
            <Weeks />
            <Dates
              month={month}
              year={year}
              onDateSelect={onDateSelect}
              selectedDate={selectedDate}
            />
          </>
        ) : null}

        {showMonthList ? (
          <>
            <Years
              year={year}
              setYear={setYear}
              onYearClick={() => {
                setShowYearList(true);
                setShowMonthList(false);
              }}
            />
            <MonthView
              onMonthClick={() => {
                setShowMonthList(false);
              }}
              setMonth={setMonth}
            />
          </>
        ) : null}

        {showYearList ? (
          <>
            <Years
              year={year}
              setYear={setYear}
              offset={offsetYear}
              onYearClick={() => {
                setShowYearList(true);
                setShowMonthList(false);
              }}
            />
            <YearView
              year={year}
              setYear={setYear}
              onYearClick={() => {
                setShowMonthList(true);
                setShowYearList(false);
              }}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Calender;
