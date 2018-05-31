import React, {Component} from 'react'

import styles from './input-text.css'

const InputText = ({ onSendText, onCloseText, userNameToReply }) =>(
  <div>
    <form className={styles.form} onSubmit={onSendText}>
      <textarea className={styles.text} name="text" defaultValue={ (userNameToReply) ? `@${userNameToReply} ` : '' }>
      </textarea>
      <div className={styles.buttons}>
        <button className={styles.close} onClick={onCloseText}>Cerrar</button>
        <button className={styles.send} type="submit">Enviar</button>
      </div>
    </form>
  </div>
)

export default InputText
