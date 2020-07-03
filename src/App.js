import React from 'react';
import BoxDays from './components/BoxDays'

function App() {

  function fillArrayDays(offsetMonth) {
    const now = new Date()
    const monthRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
    const dateFirstDay = new Date(now.getFullYear(), now.getMonth()+offsetMonth, 1)

    const headerDate = {month: monthRu[dateFirstDay.getMonth()], 
                        year: dateFirstDay.getFullYear().toString()}

    const offsetStart = [-5,-6, 0,-1,-2,-3,-4]
    const start = offsetStart[dateFirstDay.getDay()]
    const end = start + 41
    const days = []

    console.log("headerDate =", headerDate)
    console.log("date =", dateFirstDay)

    
    for(let d = start; d <= end; d++){
      days.push({key: d, date: new Date(dateFirstDay.getFullYear(), dateFirstDay.getMonth(), d).getDate().toString()})
    }

    return days
  }

  const days = fillArrayDays(0)

  return (
    <BoxDays days={days}/>
  );
}

export default App;
