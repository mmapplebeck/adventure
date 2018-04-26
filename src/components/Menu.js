import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import gamepad from '@fortawesome/fontawesome-free-solid/faGamepad'
import pencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import playCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle'
import github from '../images/github.png'
import style from '../style/menu.scss'
import buttonStyle from '../style/button.scss'
import Share from './Share'

const Menu = props => {
  return (
    <nav className={style.root}>
      <Link to={{ pathname: '/', search: props.location.search }}
        className={style.logo}>
        <FontAwesomeIcon icon={gamepad} />
      </Link>
      <div className={style.modes}>
        <Link to={{ pathname: '/edit', search: props.location.search }}
          className={[buttonStyle.warning, buttonStyle.root].join(' ')}>
          <FontAwesomeIcon icon={pencil}
            className={buttonStyle.icon} /> Create
        </Link>
        <Link to={{ pathname: '/play', search: props.location.search }}
          className={[buttonStyle.success, buttonStyle.root].join(' ')}>
          <FontAwesomeIcon icon={playCircle}
            className={buttonStyle.icon} /> Play
        </Link>
        <Share />
      </div>
      <a href="https://github.com/mmapplebeck/adventure"
        className={style.github}
        target="_blank">
        <img src={github} alt="Check out my Github" />
      </a>
    </nav>
  )
}

export default Menu
