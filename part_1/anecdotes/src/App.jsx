import { useState } from 'react'

const MostVotedAnecdote = (props) => {

  if (props.votesArr.reduce((pre,curr)=>pre+curr,0) === 0) {

    return (
      <div>

        <h1>Anecdote with most votes</h1>
        <p>No anecdote has been voted yet</p>        

      </div>
    )

  }

  let max_arr_index = props.votesArr.indexOf(Math.max(...props.votesArr))

  return (
    <div>

      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[max_arr_index]}</p>
      <p>has {props.votesArr[max_arr_index]} votes</p>        

    </div>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votesArr, setVotesArr] = useState(Array(anecdotes.length).fill(0))

  const handleNextButton = () => {

    let newSelected = Math.floor(Math.random() * anecdotes.length)
    setSelected(newSelected)

  }

  const handleVoteButton = () => {

    let newVotesArr = [...votesArr]
    newVotesArr[selected]+=1
    setVotesArr(newVotesArr)

  }

  return (

    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votesArr[selected]} votes</p>
      <button onClick={handleVoteButton}>vote</button>
      <button onClick={handleNextButton}>next anecdote</button>
      <MostVotedAnecdote votesArr={votesArr} anecdotes={anecdotes} />
    </div>
   
  )
}

export default App