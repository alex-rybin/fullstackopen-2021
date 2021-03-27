import React, {useState} from 'react'

const Button = ({clickHandler, text}) => (
    <button onClick={clickHandler}>{text}</button>
)

const Statistic = ({text, value}) => (
    <>{text} {value}</>
)

const Statistics = ({good, neutral, bad}) => {
    const getAverage = () => (good - bad) / (good + neutral + bad)
    const getPositivePercentage = () => good / (good + neutral + bad) * 100

    if (good || neutral || bad) {
        return (
            <>
                <Statistic text="good" value={good}/><br/>
                <Statistic text="neutral" value={neutral}/><br/>
                <Statistic text="bad" value={bad}/><br/>
                <br/>
                <Statistic text="all" value={good + neutral + bad}/><br/>
                <Statistic text="average" value={getAverage()}/><br/>
                <Statistic text="positive" value={getPositivePercentage() + '%'}/><br/>
            </>
        )
    }

    return <>No feedback given</>
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Button clickHandler={() => setGood(good + 1)} text="good"/>
            <Button clickHandler={() => setNeutral(neutral + 1)} text="neutral"/>
            <Button clickHandler={() => setBad(bad + 1)} text="bad"/>

            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App
