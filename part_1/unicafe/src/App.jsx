import { useState } from 'react'

const Button = ({ onClick, text }) => (

  <button onClick={onClick}> {text} </button>

)

const Statistics = (props) => {
  
  if (props.feedback.all === 0) {

    return (
      <div>

        <h1>Statistics</h1>
        <p>No feedback given</p>        
        
      </div>
    )

  }

  return (
    <div>
    
      <h1>Statistics</h1>
    
      <StatisticLine text="good" value = {props.feedback.good} />
      <StatisticLine text="neutral" value = {props.feedback.neutral} />
      <StatisticLine text="bad" value = {props.feedback.bad} />
      <StatisticLine text="all" value = {props.feedback.all} />
      <StatisticLine text="average" value = {props.feedback.average} />
      <StatisticLine text="positive" value = {props.feedback.positive} />
    
    </div>
  )
}

const StatisticLine  = ({ text, value }) => {

  return (

    <p>{text} {value}</p>

  )

}

const App = () => {

  const [feedback, setFeedback] = useState({

    good: 0, neutral: 0, bad: 0, all: 0, average: 0, positive: 0

  })

  const handleGoodFeedback = () => {

    const newGoodValue = feedback.good + 1
    const newAllValue = feedback.all + 1

    const newFeedback = { 
      ...feedback,      
      good: newGoodValue,
      all: newAllValue,
      average: (newGoodValue - feedback.bad) / newAllValue,
      positive: newGoodValue / newAllValue
    }

    setFeedback(newFeedback)

  }

  const handleNeutralFeedback = () => {

    const newNeutralValue = feedback.neutral + 1
    const newAllValue = feedback.all + 1

    const newFeedback = { 
      ...feedback,
      neutral: newNeutralValue,
      all: newAllValue,
      average: (feedback.good - feedback.bad) / newAllValue,
      positive: feedback.good / newAllValue
    }

    setFeedback(newFeedback)

  }

  const handleBadFeedback = () => {

    const newBadValue = feedback.bad + 1
    const newAllValue = feedback.all + 1

    const newFeedback = { 
      ...feedback,
      bad: newBadValue,
      all: newAllValue,
      average: (feedback.good - newBadValue) / newAllValue,
      positive: feedback.good / newAllValue
    }

    setFeedback(newFeedback)

  }
  
  return (

    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGoodFeedback} text="good"/>
      <Button onClick={handleNeutralFeedback} text="neutral"/>
      <Button onClick={handleBadFeedback} text="bad"/>      

      <Statistics feedback={feedback} />      
      
    </div>

  )

}

export default App