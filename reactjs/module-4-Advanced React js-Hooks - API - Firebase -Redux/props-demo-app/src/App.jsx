import React from 'react'

// export default function App(props) {
//   return (
//     <>
//       <h1>My name is : {props.name}</h1>
      
//     </>
//   )
// }
export default function App({props}) {
  return (
    <>
      <h1>My name is : {props.name}</h1>
      <h2>My age is : {props.age}</h2>
      <h3>My higher educations is : {props.edu}</h3>
    </>
  )
}