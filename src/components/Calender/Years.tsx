import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Button from '../Button';

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
          style='font-semibold text-base text-gray-600'
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
