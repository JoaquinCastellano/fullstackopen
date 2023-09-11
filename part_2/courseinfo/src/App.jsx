const Header = ({ header }) => <h1>{header}</h1>
const PartHeader = ({ header }) => <h2>{header}</h2>

const Part = ({ course }) => {
    
  return(

    course.parts.map(coursePart => <p key={coursePart.id} > {coursePart.name} {coursePart.exercises}</p>) 

  )

}

const Content = ({ courses }) => {

  return(

    courses.map(course => {

      return(
        
        <div key={course.id + "_c"}>

          <PartHeader key={course.id + "_h"} header={course.name} />
          <Part key={course.id + "_p"} course={course} />
          <Total key={course.id + "_t"} course={course} />
        
        </div>
      )

    })

  )

}
  
const Total = ({ course }) => {

  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return(

    <p><b>total of {total} exercises </b></p>

  )

}

const Course = ({ header, courses }) => {

  return(
    
    <>

      <Header header={header} />
      <Content courses={courses} />

    </>

  )
  
}

const App = () => {

  const courseHeader = "Web development curriculum"
  
  const courses = [  
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course header={courseHeader} courses={courses} />

}

export default App