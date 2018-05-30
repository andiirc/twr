import React, { Component} from 'react'
import uuid from 'uuid';
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component{
  constructor(props){
    super(props)
    const { user } = this.props.user
    this.state = {
      user: Object.assign({}, user , { retweets: []}, { favorites: []} ),
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
    this.setState({ openText: false })
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
      text: e.target.text.value
    }

    this.setState({
      messages: this.state.messages.concat([newMessage]),
      openText: false
    })

  }

  handleRetweet = (msgId) => {
    const { retweets } = this.state.user
    let alreadyRetweet = retweets.filter( rt => rt === msgId )

    if(alreadyRetweet === 0){
      let messages = this.state.message.map(mgs=>{
        if(msg.id == msgId) mgs.retweets++

          return mgs
      })

      let user = Object.assign({}, this.state.user)
      user.retweets.push(msgId)

      this.setState({ messages, user })

    }
  }

  handleFavorite = (msgId) => {
    const { favorites } = this.state.user
    let alreadyFavorite = favorites.filter( fav => fav === msgId )
      if(alreadyFavorite.length === 0){
        let messages = this.state.message.map(mgs=>{
          if(msg.id == msgId) mgs.favorites++

            return mgs
        })
      }

    let user = Object.assign({}, this.state.user)
    user.favorites.push(msgId)

    this.setState({ messages, user })
  }

  renderOpenText = ()=>{
    if(this.state.openText){
      return (
        <InputText
          onCloseText={this.handleCloseText}
          onSendText={this.handleSendText}
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
        <MessageList messages={this.state.messages} onRetweet={this.handleRetweet} onFavorite={this.handleFavorite} />
      </div>
    )
  }
}

export default Main
