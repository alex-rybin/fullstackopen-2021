import React, {useState} from 'react'

const Button = ({clickHandler, text}) => (
    <button onClick={clickHandler}>{text}</button>
)

const Statistic = ({text, value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = ({good, neutral, bad}) => {
    const getAverage = () => (good - bad) / (good + neutral + bad)
    const getPositivePercentage = () => good / (good + neutral + bad) * 100

    if (good || neutral || bad) {
        return (
            <table>
                <tbody>
                <Statistic text="good" value={good}/>
                <Statistic text="neutral" value={neutral}/>
                <Statistic text="bad" value={bad}/>
                <Statistic text="all" value={good + neutral + bad}/>
                <Statistic text="average" value={getAverage()}/>
                <Statistic text="positive" value={getPositivePercentage() + '%'}/>
                </tbody>
            </table>
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
