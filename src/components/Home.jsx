import React from "react"
import { Link } from 'react-router-dom'
import Header from "./Header"

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <h1>Select an Option</h1>
      <div className="card">
        <Link to="/program-picker">
          <button>Program Picker</button>
        </Link>
        <h2>Or</h2>
        <Link to="/explore">
          <button>Explore Exercises</button>
        </Link>
      </div>
    </div>
  )
}