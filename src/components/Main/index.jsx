import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      messages: [
        { text: 'Mensaje del tweet',
          picture: '',
          displayName: 'Sr. erisso',
          username: 'srerisso',
          date: Date.now()
        },
      ]
    }
  }

  render () {
    return (
      <MessageList messages={this.state.messages} />
    )
  }
}

export default Main
