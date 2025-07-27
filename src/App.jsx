import { useState } from 'react'

const Part = ({parts, index}) =>{
  return <p>{parts[index].part} {parts[index].exercise}</p>
}

const Header = ({course}) =>{
  return <h1>{course.name}</h1>
}

const Content = ({course}) =>{
  return(
    <div>
      <Part parts = {course.parts} index = {0}/>
      <Part parts = {course.parts} index = {1}/>
      <Part parts = {course.parts} index = {2}/>
    </div>
  )
}

const Total = ({course}) =>{
  return(
  <div>
    <p>Number of exercises = {course.parts[0].exercise + course.parts[1].exercise + course.parts[2].exercise}</p>
  </div>
  ) 
}

const App = () =>{
  const course = {name: 'Half Stack application development',
                  parts : [
                  {part:'Fundamentals of React', exercise: 10},
                  {part:'Using props to pass data' , exercise: 7},
                  {part:'State of a component' , exercise: 14}
                  ]
}

  return(
    <>
     <Header course = {course}/>
     <Content course = {course}/>
     <Total course = {course}/>
    </>
  )
}

export default App
