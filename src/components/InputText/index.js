import React, {Component} from 'react'

import styles from './input-text.css'

/*class InputText extends Component{
  render(){
    return(
      <div>
        <form className={styles.form} onSubmit={this.props.onSendText}>
          <textarea className={styles.text} name="text"></textarea>
          <div className={styles.buttons}>
            <button className={styles.close} onClick={this.props.onCloseText}>Cerrar</button>
            <button className={styles.send} type="submit">Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}*/

const InputText = ({ onSendText, onCloseText }) =>(
  <div>
    <form className={styles.form} onSubmit={onSendText}>
      <textarea className={styles.text} name="text"></textarea>
      <div className={styles.buttons}>
        <button className={styles.close} onClick={onCloseText}>Cerrar</button>
        <button className={styles.send} type="submit">Enviar</button>
      </div>
    </form>
  </div>
)


export default InputText
