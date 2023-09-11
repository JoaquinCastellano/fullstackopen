const Header = ({ course }) => <h1>{course.name}</h1>

const Parts = ({ course }) => {

  return(

    course.parts.map(part => 
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    )

  )

}

const Content = ({ course }) => {

  return(
    
      <Parts course={course} />

  )
}

const Total = ({ course }) => {

  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return(

    <p><b>Number of exercises {total}</b></p>

  )

}

const Course = ({ course }) => {

  return(
    
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>

  )
  
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App