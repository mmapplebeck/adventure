import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import gamepad from '@fortawesome/fontawesome-free-solid/faGamepad'
import style from '../style/menu.scss'

const Menu = props => {
  return (
    <nav className={style.root}>
      <Link to='/' className={style.logo}>
        <FontAwesomeIcon icon={gamepad} />
      </Link>
      <div className={style.modes}>
        <Link to='/edit'>Edit</Link>
        <Link to='/play'>Play</Link>
      </div>
      <a href="" target="_blank">Github</a>
    </nav>
  )
}

export default Menu
