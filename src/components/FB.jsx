import React from "react"

export default function FB({ routines }) {


  return (
    <div>
      {routines.map((routine, index) => (
        <div key={index}>
          <h2>3-Day Full Body</h2>
          {routine.fullbody.map((day, dayIndex) => (
            <div key={dayIndex}>
              {Object.keys(day).map((dayName, dayNameIndex) => (
                <div key={dayNameIndex}>
                  <h3>{dayName}</h3>
                  <ul>
                    {day[dayName].map((exercise, exerciseIndex) => (
                      <li key={exerciseIndex}>{exercise}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}