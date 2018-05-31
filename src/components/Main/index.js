import React, { Component} from 'react'
import uuid from 'uuid';
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component{
  constructor(props){
    super(props)

    this.state = {
      user: Object.assign({}, this.props.user , { retweets: [] }, { favorites: [] } ),
      userNameToReply: '',
      openText: false,
      messages: [
        {
          id: uuid.v4(),
          text:'Primer de tweet',
          picture:'https://www.gravatar.com/avatar',
          displayName:'Anderson',
          userName: 'Andiirc',
          date: Date.now() - 180000,
          retweets: 0,
          favorites: 0
        },
        {
          id: uuid.v4(),
          text:'Segundo de tweet',
          picture:'https://www.gravatar.com/avatar',
          displayName:'Sebastian',
          userName: 'SebasRock',
          date: Date.now() - 1800000,
          retweets: 0,
          favorites: 0
        }
      ]
    }
  }

  handleOpenText = (e) =>{
    e.preventDefault()
    this.setState({ openText: true })
  }

  handleCloseText = (e) => {
    e.preventDefault()
    this.setState({ openText: false, userNameToReply: '' })
  }

  handleSendText = (e) => {
    e.preventDefault()
    const { photoUrl, email, displayName } = this.props.user

    let newMessage = {
      id: uuid.v4(),
      username: email.split('@')[0],
      displayName: displayName,
      date: Date.now(),
      picture: photoUrl,
      text: e.target.text.value,
      retweets: 0,
      favorites: 0
    }

    this.setState({
      messages: this.state.messages.concat([newMessage]),
      openText: false,
      userNameToReply: ''
    })

  }

  handleRetweet = (msgId) => {
    let alreadyRetweet = this.state.user.retweets.filter( rt => rt === msgId )

    if(alreadyRetweet.length === 0){
      let messages = this.state.messages.map(msg=>{
        if(msg.id == msgId) msg.retweets++
          return msg
      })

      let user = Object.assign({}, this.state.user)
      user.retweets.push(msgId)
      this.setState({ messages, user })
    }

    if(alreadyRetweet.length === 1){
      let messages = this.state.messages.map(msg=>{
        if(msg.id == msgId) msg.retweets--
          return msg
      })

      let user = Object.assign({}, this.state.user)
      user.retweets.splice(msgId, 1)
      this.setState({ messages, user })
    }

  }

  handleFavorite = (msgId) => {
    let alreadyFavorite = this.state.user.favorites.filter( fav => fav === msgId )

      if(alreadyFavorite.length === 0){
        let messages = this.state.messages.map(msg=>{
          if(msg.id == msgId) msg.favorites++
            return msg
        })

        let user = Object.assign({}, this.state.user)
        user.favorites.push(msgId)
        this.setState({ messages, user })
      }

      if(alreadyFavorite.length === 1){
        let messages = this.state.messages.map(msg=>{
          if(msg.id == msgId) msg.favorites--
            return msg
        })

        let user = Object.assign({}, this.state.user)
        user.favorites.splice(msgId, 1)
        this.setState({ messages, user })
      }
  }

  handleReplyTeewt = (msgId, userNameToReply) =>{
    this.setState({ openText: true, userNameToReply })
  }

  renderOpenText = ()=>{
    if(this.state.openText){
      return (
        <InputText
          onCloseText={this.handleCloseText}
          onSendText={this.handleSendText}
          userNameToReply={this.state.userNameToReply}
        />
      )
    }
  }

  render(){
    const { photoUrl, email, onOpenText } = this.props.user

    return(
      <div>
        <ProfileBar
          picture={photoUrl}
          username={email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList
          messages={this.state.messages}
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite}
          onReplyTweet={this.handleReplyTeewt}
        />
      </div>
    )
  }
}

export default Main
