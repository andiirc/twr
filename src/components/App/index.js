import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component{
  constructor(){
    super()
    this.state ={
      user:{
        photoUrl: '',
        email: 'andiirc@gmail.com',
        onOpenText: false
      }
    }
  }

  render(){
    return (
      <div>
        <Header />
        <Main user={this.state.user}/>
      </div>
    )
  }
}

export default App
