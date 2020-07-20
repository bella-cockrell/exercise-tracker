import React, { useState } from 'react'

const [exercise, setExercise] = useState({
  username: '',
  description: '',
  duration: 0,
  date: new Date(),
  users: [],
})

const onChangeUsername = (e) => {
  setExercise({ username: e.target.value })
}

const onChangeDescription = (e) => {
  setExercise({ description: e.target.value })
}

const onChangeDuration = (e) => {
  setExercise({ duration: e.target.value })
}

// const onChangeDate = (e) => {
//   setExercise({ date: date })
// }

const onSubmit = (e) => {
  e.preventDefault()
  const submittedExercise = {
    username: exercise.username,
    description: exercise.description,
    duration: exercise.duration,
    date: exercise.date,
  }
  console.log(submittedExercise)
  window.location = '/'
}

const CreateExercise = (props) => {
  return <div>{exercise}</div>
}

export default CreateExercise
