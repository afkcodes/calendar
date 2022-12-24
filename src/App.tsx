import { useState } from 'react';
import Calender from './components/Calender/Calender';
import { DateType } from './components/Calender/types';

function App() {
  const [selectedDate, setSelectedDate] = useState<DateType>({
    date: {
      date: 0,
      month: 0,
      year: 0,
    },
    type: '',
    dateString: '',
    epochDateString: 0,
  });

  return (
    <div className='flex flex-col bg-white justify-center items-center h-screen'>
      <Calender onDateSelect={setSelectedDate} selectedDate={selectedDate} />
      <div className='mt-20'>{JSON.stringify(selectedDate?.date)}</div>
    </div>
  );
}

export default App;
