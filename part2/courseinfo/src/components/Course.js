import React from 'react'

const Header = props => (
    <h1>{props.course}</h1>
)

const Part = props => (
    <p>{props.part.name} {props.part.exercises}</p>
)

const Content = props => (
    props.parts.map(part => <Part part={part} key={part.id}/>)
)

const Footer = props => {
    const totalExercises = props.parts.map(part => part.exercises).reduce((a, b) => a + b)
    return <p>Number of exercises {totalExercises}</p>
}

const Course = props => (
    <>
        <Header course={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Footer parts={props.course.parts}/>
    </>
)

export default Course
