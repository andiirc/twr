import React, { Component} from 'react'
import style from './header.css'

class Header extends Component{
  render(){
    return(
      <header className={style.root}>
        <h1 className={style.logo}>Reacttr</h1>
      </header>
    )
  }
}

export default Header
