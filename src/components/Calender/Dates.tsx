import { getDatesWithOffset } from './helper/helper.calender';
import Cell from './Cell';
import { BaseDateType, DateType } from './types/types';

interface DatesPropsType {
  month: number;
  year: number;
  selectedDate: DateType;
  onDateSelect: Function;
}

const Dates: React.FC<DatesPropsType> = ({
  month,
  year,
  selectedDate,
  onDateSelect,
}) => {
  const calenderDates = getDatesWithOffset(month, year, true);

  return (
    <ul className='grid grid-cols-7 w-full gap-x-5 gap-y-3 pt-4'>
      {calenderDates.map((date: BaseDateType, idx: number) => (
        <Cell
          date={date.date}
          key={`DATES_CELL_${date.epochDate}_${idx}`}
          type={date.type}
          dateString={date.dateString}
          epochDate={date.epochDate}
          month={month}
          year={year}
          isHoliday={date.isHoliday}
          holidayReason={date.reason}
          onDateSelect={onDateSelect}
          selectedDate={selectedDate}
        />
      ))}
    </ul>
  );
};

export default Dates;
