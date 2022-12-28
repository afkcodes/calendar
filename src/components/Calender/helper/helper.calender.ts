import { holidays } from '../holidays/holidays';
import { BaseDateType, DateCategoryType, HolidaysType } from '../types/types';

export const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export const months: any = {
  1: 'JANUARY',
  2: 'FEBRUARY',
  3: 'MARCH',
  4: 'APRIL',
  5: 'MAY',
  6: 'JUNE',
  7: 'JULY',
  8: 'AUGUST',
  9: 'SEPTEMBER',
  10: 'OCTOBER',
  11: 'NOVEMBER',
  12: 'DECEMBER',
};

export let yearOffset = 20;

const getActualMonth = (month: number) => month - 1;
const getRealizedMonth = (month: number) => month + 1;

const getFirstDay = (month: number, year: number) =>
  new Date(year, getActualMonth(month)).getDay();

const getLastDay = (month: number, year: number, date: number) =>
  new Date(year, getActualMonth(month), date).getDay();

export const createYearList = (year: number, offset: number = yearOffset) => {
  const yearList = [];
  const actualOffset = year + offset;
  for (let i = year; i < actualOffset; i++) {
    yearList.push(i);
  }
  return yearList;
};

export const getInitialCalenderDate = () => {
  const date = new Date().getDate();
  const month = getRealizedMonth(new Date().getMonth());
  const year = new Date().getFullYear();
  return { date, year, month };
};

export const createDates = (
  month: number,
  year: number,
  type: DateCategoryType = 'current'
) => {
  const datesLength = new Date(year, month, 0).getDate();
  const dates: BaseDateType[] = [];
  const initialDate = getInitialCalenderDate();

  for (let date = 1; date <= datesLength; date++) {
    if (
      initialDate.date === date &&
      initialDate.month === month &&
      initialDate.year === year
    ) {
      dates.push({
        date: date,
        type: 'today',
        dateString: new Date(`${year}-${month}-${date}`).toDateString(),
        epochDate: new Date(`${year}-${month}-${date}`).getTime(),
        isHoliday: false,
        reason: '',
      });
    } else {
      dates.push({
        date: date,
        type: type,
        dateString: new Date(`${year}-${month}-${date}`).toDateString(),
        epochDate: new Date(`${year}-${month}-${date}`).getTime(),
        isHoliday: false,
        reason: '',
      });
    }
  }

  return dates;
};

const createPreviousDates = (month: number, year: number) => {
  const actualYear = month === 1 ? year - 1 : year;
  const dates = createDates(getActualMonth(month), actualYear, 'previous');
  return dates;
};

const createNextDates = (month: number, year: number) => {
  const actualYear = month === 12 ? year + 1 : year;
  const actualMonth = month === 12 ? 1 : month;
  const dates = createDates(actualMonth, actualYear, 'next');
  return dates;
};

const getHolidays = (month: number, year: number) => {
  const holidaysList: number[] = [];
  const holidaysDetailsList = holidays.filter(
    (holiday: HolidaysType) => holiday.month === month && holiday.year === year
  );

  holidays.forEach((holiday: HolidaysType) => {
    if (holiday.month === month && holiday.year === year) {
      holidaysList.push(holiday.date);
    }
  });

  return { holidaysList, holidaysDetailsList };
};

export const getDatesWithOffset = (
  month: number,
  year: number,
  includesHolidays = false
) => {
  const firstDay = getFirstDay(month, year);
  const dates = createDates(month, year);
  let lastDay = getLastDay(month, year, dates[dates.length - 1].date);
  const lastMonthDates = createPreviousDates(month, year);
  const nextMonthDates = createNextDates(month, year);

  dates.forEach((el: BaseDateType, idx: number) => {
    if (idx < firstDay) {
      dates.unshift(lastMonthDates[lastMonthDates.length - (idx + 1)]);
    }

    if (lastDay < 6) {
      dates.push(nextMonthDates[idx]);
      lastDay++;
    }
  });

  if (includesHolidays) {
    dates.forEach((date: BaseDateType) => {
      const { holidaysList, holidaysDetailsList } = getHolidays(month, year);
      if (holidaysList.length && holidaysList.includes(date.date)) {
        date['isHoliday'] = true;
        date['reason'] = holidaysDetailsList?.filter(
          (holiday: HolidaysType) => holiday?.date === date?.date
        )[0]?.reason;
      }
    });
  }

  return dates;
};
