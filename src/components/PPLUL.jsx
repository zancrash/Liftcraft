import React from "react"

export default function PPLUL({ routines }) {


  return (
    <div>
      {routines.map((routine, index) => (
        <div key={index}>
          <h2>5-day Pull Push Legs Upper Lower</h2>
          {routine.pplul.map((day, dayIndex) => (
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