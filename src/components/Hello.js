import React from 'react'

const Hello = (props) => {
  const { mrHoney, title } = props
  return (
    <section id='hello'>
      <h1>{title}</h1>
      <img src={mrHoney} alt={title} />
    </section>
  )
}

export default Hello
