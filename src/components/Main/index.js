import React, { Component} from 'react'
import uuid from 'uuid';
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component{
  constructor(){
    super()
    this.state = {
      openText: false,
      messages: [
        {
          id: uuid.v4(),
          text:'Primer de tweet',
          picture:'https://www.avatarapi.com/js.aspx?email=peter.smith@gmail.com&size=128',
          displayName:'Anderson',
          userName: 'Andiirc',
          date: Date.now() - 180000
        },
        {
          id: uuid.v4(),  
          text:'Segundo de tweet',
          picture:'https://www.avatarapi.com/js.aspx?email=peter.smith@gmail.com&size=128',
          displayName:'Sebastian',
          userName: 'SebasRock',
          date: Date.now() - 1800000
        }
      ]
    }
  }

  handleOpenText = (e) =>{
    e.preventDefault()
    this.setState({ openText: true })
  }

  renderOpenText = ()=>{
    if(this.state.openText){
      return <InputText/>
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
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default Main
