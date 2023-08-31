import { useState } from 'react'

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

      <button onClick={handleGoodFeedback}>good</button>
      <button onClick={handleNeutralFeedback}>neutral</button>
      <button onClick={handleBadFeedback}>bad</button>

      <h1>statistics</h1>

      <p>good {feedback.good}</p>
      <p>neutral {feedback.neutral}</p>
      <p>bad {feedback.bad}</p>
      <p>all {feedback.all}</p>
      <p>average {feedback.average}</p>
      <p>positive {feedback.positive}</p>
      
    </div>
  )

}

export default App