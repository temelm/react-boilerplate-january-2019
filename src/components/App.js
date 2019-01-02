import React from 'react'
import Hello from './Hello'
import mrHoney from '../images/mr-honey.jpg'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Hello Mr. Honey!'
    }
  }

  render () {
    const { title } = this.state
    return (
      <div id='app'>
        <Hello title={title} mrHoney={mrHoney} />
      </div>
    )
  }
}

export default App
