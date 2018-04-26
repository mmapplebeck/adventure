import React from 'react'
import style from '../style/button.scss'

const Button = props => {
  return (
    <button className={style.root}
      {...props}>
      {props.children}
    </button>
  )
}

export default Button
