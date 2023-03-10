import { useState } from 'react';
import Calender from './components/Calender/Calender';
import { DateType } from './components/Calender/types/types';

function App() {
  const [selectedDate, setSelectedDate] = useState<DateType>({
    date: {
      date: 0,
      month: 0,
      year: 0,
    },
    epochDate: 0,
    type: '',
    dateString: '',
    isHoliday: false,
    reason: '',
  });

  return (
    <div className='flex flex-col bg-white  items-center h-screen pt-12'>
      <Calender onDateSelect={setSelectedDate} selectedDate={selectedDate} />
      <pre className='mt-20'>{JSON.stringify(selectedDate, null, 2)}</pre>
    </div>
  );
}

export default App;
