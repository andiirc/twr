import React, { Component } from 'react'

import moment from 'moment'
import styles from './message.css'

class Message extends Component{
  constructor(props){
    super(props)

    this.state = {
      pressFavorite: false,
      pressRetweet: false
    }

  }

  onPressFavorite = () => {
     this.props.onFavorite()
     this.setState({ pressFavorite: !this.state.pressFavorite })
  }

  onPressRetweet = () =>{
     this.props.onRetweet()
     this.setState({ pressRetweet: !this.state.pressRetweet })
  }


  render(){
    const { text, displayName, userName, date, picture,
      numRetweets, numFavorites} = this.props
    return (
      <div className={styles.root}>
        <div className={styles.user}>
          <figure>
            <img className={styles.avatar} src={picture} />
          </figure>
          <span className={styles.displayName}>{displayName}</span>
          <span className={styles.userName}>{userName}</span>
          <span className={styles.date}>{moment(date).fromNow()}</span>
          <h3>{text}</h3>
            <div className={styles.buttons} >
              <div className={styles.icon}><span className="fa fa-reply"></span></div>
              <div className={(this.state.pressRetweet) ? styles.rtGreen: '' } onClick={this.onPressRetweet}>
                <span className="fa fa-retweet"></span>
                <span className={styles.num}>{numRetweets}</span>
              </div>
              <div className={(this.state.pressFavorite) ? styles.fvYellow: '' } onClick={this.onPressFavorite}>
                <span className="fa fa-star"></span>
                <span className={styles.num}>{numFavorites}</span>
              </div>
            </div>
        </div>
      </div>
    )
  }

}


export default Message
