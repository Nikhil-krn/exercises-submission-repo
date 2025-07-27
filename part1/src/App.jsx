import { useState } from 'react'

const Part = ({array, index}) =>{
  return <p>{array[index].part} {array[index].exercise}</p>
}

const Header = ({course}) =>{
  return <h1>{course}</h1>
}

const Content = ({array}) =>{
  return(
    <div>
      <Part array = {array} index = {0}/>
      <Part array = {array} index = {1}/>
      <Part array = {array} index = {2}/>
    </div>
  )
}

const Total = ({array}) =>{
  return(
  <div>
    <p>Number of exercises = {array[0].exercise + array[1].exercise + array[2].exercise}</p>
  </div>
  ) 
}

const App = () =>{
  const course = 'Half Stack application development'
  const toDoArray = [
    {part:'Fundamentals of React', exercise:10},
    {part:'Using props to pass data' , exercise:7},
    {part:'State of a component' , exercise:14}
  ]

  return(
    <>
     <Header course = {course}/>
     <Content array = {toDoArray}/>
     <Total array = {toDoArray}/>
    </>
  )
}

export default App
