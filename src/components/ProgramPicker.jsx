import React from "react"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FB from './FB'
import UL from './UL'
import PPL from "./PPL"
import PPLUL from "./PPLUL"
import Header from "./Header"

export default function ProgramPicker() {
  const [days, setDays] = useState(0)

  const [data, setData] = useState(null);

  const selectDays = (num) => {
    setDays(num)
    console.log(days)
  }

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch('data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);



  return (
    <div className="card-2">
      <Header/>
      <h2>How many days a week do you wish to train?</h2>

      <button onClick={() => selectDays(3)}>3 days</button>
      <button onClick={() => selectDays(4)}>4 days</button>
      <button onClick={() => selectDays(5)}>5 days</button>
      <button onClick={() => selectDays(6)}>6 days</button>

      <Link to="/" className="return-link">
        <button className="return-btn">Return</button>
      </Link>

      {
        days == 3 && data ? <FB routines={data.routines}/> : days == 4 && data ? <UL routines={data.routines}/> : days == 5 && data ? <PPLUL routines={data.routines} /> :days == 6 && data ? <PPL routines={data.routines} /> : <></>
      }

      

    </div>
  )
}