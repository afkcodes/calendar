import { getDatesWithOffset } from '../../utils/helper.calender';
import Cell from './Cell';
import { DateType } from './types';

interface DatesPropsType {
  month: number;
  year: number;
  selectedDate: DateType;
  onDateSelect: Function;
}

interface dateType {
  date: number;
  type: string;
  dateString: string;
  epochDateString: string;
}

const Dates: React.FC<DatesPropsType> = ({
  month,
  year,
  selectedDate,
  onDateSelect,
}) => {
  const calenderDates = getDatesWithOffset(month, year);

  return (
    <ul className='grid grid-cols-7 w-full gap-x-5 gap-y-3 pt-4'>
      {calenderDates.map((date: dateType) => (
        <Cell
          date={date.date}
          key={`DATES_CELL_${Math.random()}`}
          type={date.type}
          dateString={date.dateString}
          epochDateString={date.epochDateString}
          month={month}
          year={year}
          onDateSelect={onDateSelect}
          selectedDate={selectedDate}
        />
      ))}
    </ul>
  );
};

export default Dates;
