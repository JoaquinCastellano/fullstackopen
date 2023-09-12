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

export default Course