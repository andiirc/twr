import React, {Component} from 'react'
import styles from './profile-bar.css'


const ProfileBar = ({picture, username, onOpenText}) =>(
  <div className={styles.root}>
    <figure>
      <img className={styles.avatar} src={picture}/>
    </figure>
    <span className={styles.username}>Hola @{username}!</span>
    <button className={styles.button} onClick={onOpenText} >
      <span className="fa fa-lg fa-edit"></span> Tweet!
    </button>
  </div>
)

export default ProfileBar
