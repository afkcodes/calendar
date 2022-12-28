import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Button from '../Button';

interface YearsPropType {
  year: number;
  setYear: Function;
}

const Years: React.FC<YearsPropType> = ({ year, setYear }) => {
  const handleYearChange = (type: string) => {
    if (type === 'next') {
      setYear(year + 1);
    } else {
      setYear(year - 1);
    }
  };
  return (
    <section className='w-full flex flex-1 justify-between mb-1 ml-1'>
      <div className='w-full flex flex-1 justify-between items-center rounded mb-1 '>
        <Button
          handleClick={() => handleYearChange('previous')}
          type='previous'
          iconSize={20}
        />
        <p className='font-semibold text-base text-gray-600'>{year}</p>
        <Button
          handleClick={() => handleYearChange('next')}
          type='next'
          iconSize={20}
        />
      </div>
    </section>
  );
};

export default Years;
