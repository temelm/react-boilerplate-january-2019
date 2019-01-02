import React from 'react'

const Hello = (props) => {
  return (
    <section id='hello'>
      <h1>{props.title}</h1>
      <img src={props.mrHoney} alt={props.title}></img>
    </section>
  )
}

export default Hello
