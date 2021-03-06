import React from 'react'

const Header = props => (
    <h1>{props.course}</h1>
)

const Part = props => (
    <p>{props.part.name} {props.part.exercises}</p>
)

const Content = props => (
    <>
        <Part part={props.parts[0]}/>
        <Part part={props.parts[1]}/>
        <Part part={props.parts[2]}/>
    </>
)

const Footer = props => {
    const totalExercises = props.parts.map(part => part.exercises).reduce((a, b) => a + b)
    return <p>Number of exercises {totalExercises}</p>
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }]

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Footer parts={parts}/>
        </div>
    )
}

export default App
