import React from 'react';
import BoxDays from './components/BoxDays'
import AppHeader from './components/AppHeader'
import Buttons from './components/Buttons'

function App() {
  let state = {}

  function fillArrayDays(offsetMonth) {
    const now = new Date()
    const monthRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
    const dateFirstDay = new Date(now.getFullYear(), now.getMonth()+offsetMonth, 1)

    state.headerDate = {month: monthRu[dateFirstDay.getMonth()], year: dateFirstDay.getFullYear().toString()}

    const offsetStart = [-5,-6, 0,-1,-2,-3,-4]
    const start = offsetStart[dateFirstDay.getDay()]
    const end = start + 41
    const days = []
   
    for(let d = start; d <= end; d++){
      days.push({key: d, date: new Date(dateFirstDay.getFullYear(), dateFirstDay.getMonth(), d).getDate().toString()})
    }

    state.days = days
  }

  fillArrayDays(1)

  return (
    <div className="wrapper">
      <AppHeader />
      <Buttons headerDate={state.headerDate} />
      <BoxDays days={state.days}/>
    </div>
  )
}

export default App;
