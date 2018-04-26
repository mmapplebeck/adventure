import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import gamepad from '@fortawesome/fontawesome-free-solid/faGamepad'
import pencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import playCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle'
import style from '../style/menu.scss'
import buttonStyle from '../style/button.scss'

const Menu = props => {
  return (
    <nav className={style.root}>
      <Link to='/' className={style.logo}>
        <FontAwesomeIcon icon={gamepad} />
      </Link>
      <div className={style.modes}>
        <Link to='/edit' className={[buttonStyle.edit, buttonStyle.root].join(' ')}>
          <FontAwesomeIcon icon={pencil}
            className={buttonStyle.icon} /> Create
        </Link>
        <Link to='/play' className={[buttonStyle.play, buttonStyle.root].join(' ')}>
          <FontAwesomeIcon icon={playCircle}
            className={buttonStyle.icon} /> Play
        </Link>
      </div>
      <a href="" target="_blank">Github</a>
    </nav>
  )
}

export default Menu
