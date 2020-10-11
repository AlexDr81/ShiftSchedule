import React from 'react'

function BoxDays(props) { 
  return(
  <div className="box-days">
    {
       props.days.map((day)=>{
         return(
          <div className={day.decorClass} key={day.key}>{day.date}</div>
         )
       })
    }
  </div>)

} 
    

export default BoxDays