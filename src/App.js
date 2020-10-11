import React from 'react';
import BoxDays from './components/BoxDays'
import AppHeader from './components/AppHeader'
import Buttons from './components/Buttons'

function App() {
  let state = {}
  const now = new Date()

  function getDecorDay(date, brigada = 1){
    const decoreDayClass = [' green', ' blue', '', '']
    const decoreDayClassNotThisMonth = ' not_this_month'
    const date1BrigadaInDay = new Date(2020,1,3+brigada)
    let day = ((date.getTime() - date1BrigadaInDay.getTime()) / 86400000) % 4
    if(now.getMonth() !== date.getMonth()){
      return 'day' + decoreDayClass[day] + decoreDayClassNotThisMonth;
    }else{
      return 'day' + decoreDayClass[day];
    }
    
  }

  function fillArrayDays(offsetMonth) {
    const monthRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
    const dateFirstDay = new Date(now.getFullYear(), now.getMonth()+offsetMonth, 1)

    state.headerDate = {month: monthRu[dateFirstDay.getMonth()], year: dateFirstDay.getFullYear().toString()}

    const offsetStart = [-5,-6, 0,-1,-2,-3,-4]
    const start = offsetStart[dateFirstDay.getDay()]
    const end = start + 41
    const days = []
 

    for(let day = start; day <= end; day++){
      let date = new Date(dateFirstDay.getFullYear(), dateFirstDay.getMonth(), day)

      days.push({key: day, date: date.getDate().toString(), decorClass: getDecorDay(date, 2)})
    }


    state.days = days
  }

  fillArrayDays(0)

  return (
    <div className="wrapper">
      <AppHeader />
      <Buttons headerDate={state.headerDate} />
      <BoxDays days={state.days}/>
    </div>
  )
}

export default App;