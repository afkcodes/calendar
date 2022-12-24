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

const getActualMonth = (month: number) => month - 1;
const getRealizedMonth = (month: number) => month + 1;

const getFirstDay = (month: number, year: number) =>
  new Date(year, getActualMonth(month)).getDay();

const getLastDay = (month: number, year: number, date: number) =>
  new Date(year, getActualMonth(month), date).getDay();

export const getInitialCalenderDate = () => {
  const date = new Date().getDate();
  const month = getRealizedMonth(new Date().getMonth());
  const year = new Date().getFullYear();
  return { date, year, month };
};

export const createDates = (month: number, year: number, type = 'current') => {
  const datesLength = new Date(year, month, 0).getDate();
  const dates: any = [];
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
        epochDateString: new Date(`${year}-${month}-${date}`).getTime(),
      });
    } else {
      dates.push({
        date: date,
        type: type,
        dateString: new Date(`${year}-${month}-${date}`).toDateString(),
        epochDateString: new Date(`${year}-${month}-${date}`).getTime(),
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
  const dates = createDates(month, actualYear, 'next');
  return dates;
};

export const getDatesWithOffset = (month: number, year: number) => {
  const firstDay = getFirstDay(month, year);
  const dates = createDates(month, year);
  let lastDay = getLastDay(month, year, dates[dates.length - 1].date);
  const lastMonthDates = createPreviousDates(month, year);
  const nextMonthDates = createNextDates(month, year);

  dates.forEach((el: number, idx: number) => {
    if (idx < firstDay) {
      dates.unshift(lastMonthDates[lastMonthDates.length - (idx + 1)]);
    }
    if (lastDay < 6) {
      dates.push(nextMonthDates[idx]);
      lastDay++;
    }
  });
  return dates;
};
