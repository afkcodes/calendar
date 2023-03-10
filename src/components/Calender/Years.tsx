import React from 'react';
import Button from '../Button';
import { yearOffset } from './helper/helper.calender';

interface YearsPropType {
  year: number;
  setYear: Function;
  onYearClick: () => void;
  offset?: number;
}

const Years: React.FC<YearsPropType> = ({
  year,
  setYear,
  onYearClick,
  offset,
}) => {
  const handleYearChange = (type: string) => {
    if (type === 'next') {
      setYear(year + 1);
    } else {
      setYear(year - 1);
    }

    if (type === 'next' && offset) {
      setYear(year + yearOffset);
    } else if (type === 'previous' && offset) {
      setYear(year - yearOffset);
    }
  };
  return (
    <section className='w-full flex flex-1 justify-between mb-1'>
      <div className='w-full flex flex-1 justify-between items-center rounded mb-1 '>
        <Button
          type='ICON'
          handleClick={() => handleYearChange('previous')}
          iconName='previous'
          iconSize={20}
        />
        <Button
          text={offset ? `${year} - ${offset}` : year}
          type='TEXT'
          style='font-semibold text-base text-gray-600 px-2'
          handleClick={onYearClick}
        />
        <Button
          type='ICON'
          handleClick={() => handleYearChange('next')}
          iconName='next'
          iconSize={20}
        />
      </div>
    </section>
  );
};

export default Years;
