import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import './components/Navbar'
import './components/ExerciseList'
import './components/EditExercise'
import './components/CreateExercise'
import './components/CreateUser'

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  )
}

export default App
