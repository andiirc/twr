import React, {Component} from 'react'

import styles from './message-list.css'
import Message from '../Message'

class MessageList extends Component{

  constructor(props){
    super(props)
  }

  render(){
    const { messages } = this.props
    return (
      <div className={styles.root}>
        { messages.map( (msg) =>
            <Message
                key={msg.id}
                text={msg.text}
                displayName={msg.displayName}
                userName={msg.userName}
                date={msg.date}
                picture={msg.picture}
            />
          ) }
      </div>
    )
  }

}

export default MessageList
