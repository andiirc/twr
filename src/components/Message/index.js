import React, { Component } from 'react'

import moment from 'moment'
import style from './message.css'

/*class Message extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { text, displayName } = this.props
    return (
      <div>
        <h1>{text}</h1>
        <p>{displayName}</p>
      </div>
    )
  }

}*/

const Message = ({text, displayName, userName, date, picture}) => (
  <div className={style.root}>
    <div className={style.user}>
      <figure>
        <img className={style.avatar} src={picture} />
      </figure>
      <span className={style.displayName}>{displayName}</span>
      <span className={style.userName}>{userName}</span>
      <span className={style.date}>{moment(date).fromNow()}</span>
      <h3>{text}</h3>
        <div className={style.buttons}>
          <div className={style.icon}><span className="fa fa-reply"></span></div>
          <div className={style.icon}><span className="fa fa-retweet"></span></div>
          <div className={style.icon}><span className="fa fa-star"></span></div>
        </div>
    </div>
  </div>
)

export default Message
