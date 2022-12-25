export interface DateType {
  date: {
    date: number;
    month: number;
    year: number;
  };
  epochDate: number;
  type: string;
  dateString: string;
  isHoliday: boolean;
  reason: string;
}

export interface HolidaysType {
  date: number;
  month: number;
  year: number;
  reason: string;
}

export type DateCategoryType = 'current' | 'previous' | 'next' | 'today';
export interface BaseDateType {
  date: number;
  type: DateCategoryType;
  isHoliday?: boolean;
  epochDate: number;
  dateString: string;
  reason?: string;
}
