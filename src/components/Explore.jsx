import React from "react"
import { useState, useEffect } from 'react'

export default function Explore() {
  const [selectedMuscle, setSelectedMuscle] = useState('')
  const [selectedExerciseType, setSelectedExerciseType] = useState('')
  const [selectedDifficulty, setselectedDifficulty] = useState('')
  const [apiData, setApiData] = useState(null);


  const selectMuscle = (e) => {
    setSelectedMuscle(e.target.value)
    console.log(selectedMuscle)
  }

  const selectExerciseType = (e) => {
    setSelectedExerciseType(e.target.value)
    console.log(selectedExerciseType)
  }

  const selectDifficulty = (e) => {
    setselectedDifficulty(e.target.value)
    console.log(selectedDifficulty)
  }

  const fetchData = async (muscle, type, difficulty) => {
    fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&type=${type}&difficulty=${difficulty}`,{
      headers: {
        'X-Api-Key': 'RoNSrQ2PlhtgsAJrc8tpmQ==BzBasWSO1A6xacC3'
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching data')
      }
      return response.json()
    })
    .then((data) => {
      console.log('API Response: ', data)
      setApiData(data)
    })
    .catch((error) => {
      console.error('API Error: ', error)
    })
  }

  const muscleOptions = [
    'abdominals',
    'abductors',
    'adductors',
    'biceps',
    'calves',
    'chest',
    'forearms',
    'glutes',
    'hamstrings',
    'lats',
    'lower_back',
    'middle_back',
    'neck',
    'quadriceps',
    'traps',
    'triceps'
  ]

  const typeOptions = [
    'cardio',
    'olympic_weightlifting',
    'plyometrics',
    'powerlifting',
    'strength',
    'stretching',
    'strongman'
  ]

  const difficultyOptions = [
    'beginner',
    'intermediate',
    'expert'
  ]


  const formatOptionText = (text) => {
    // Replace underscores with spaces and capitalize the text
    return text.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  

  return (
    <div className="card-2">
      <h2>What exercises do you wish to explore?</h2>

        {/* <label htmlFor="exploreDropDown">Select a muscle group: </label> */}
        <select className="exploreDropDown" value={selectedMuscle} onChange={selectMuscle}>
          <option value="">Select Muscle Group</option>
          {muscleOptions.map((option) => (
            <option key={option} value={option}>
              {formatOptionText(option)}
            </option>
          ))}
        </select>
        <br />
        {/* <label htmlFor="exploreDropDown">Select exercise type: </label> */}
        <select className="exploreDropDown" value={selectedExerciseType} onChange={selectExerciseType}>
          <option value="">Select Exercise Type</option>
          {typeOptions.map((option) => (
            <option key={option} value={option}>
              {formatOptionText(option)}
            </option>
          ))}
        </select>
        <br />
        {/* <label htmlFor="exploreDropDown">Select difficulty: </label> */}
        <select className="exploreDropDown" value={selectedDifficulty} onChange={selectDifficulty}>
          <option value="">Select Difficulty</option>
          {difficultyOptions.map((option) => (
            <option key={option} value={option}>
              {formatOptionText(option)}
            </option>
          ))}
        </select>
        <br />
        <button onClick={() => fetchData(selectedMuscle, selectedExerciseType, selectedDifficulty)}>Show Exercises</button>


      {apiData && (
      <div id="exercises-holder">
        {apiData.length > 0 ? (
          <ul>
            {apiData.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <strong>Type:</strong> {formatOptionText(item.type)}<br />
                <strong>Muscle:</strong> {item.muscle}<br />
                <strong>Difficulty:</strong> {item.difficulty}<br />
                {/* <strong>Instructions:</strong> {item.instructions} */}
              </li>
            ))}
          </ul>
        ) : (
          <h3>No exercises found.</h3>
        )}
      </div>
      )}
      {/* <button onClick={() => selectSplit("Full Body")}>By Muscle Group</button> */}
      
    </div>
  )
}