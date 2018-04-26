import React from 'react'
import style from '../style/sword.scss'

// https://codepen.io/itslit/pen/brzGYo

const Sword = props => {
  return (
    <div className={`${style.root} l-container container`}>
      <div className="l-sword">
        <div className="l-handle-orb handle-orb"></div>
        <div className="l-handle-block handle-block"></div>
        <div className="l-handle-block-curve handle-block-curve"></div>
        <div className="l-handle handle"></div>
        <div className="l-small-handle-block handle-block"></div>
        <div className="l-large-handle-block-curve handle-block-curve"></div>
        <div className="l-blade">
          <div className="l-blade-top blade-top"></div>
          <div className="l-blade-left blade-left"></div>
          <div className="l-blade-right blade-right"></div>
          <div className="l-blade-bottom blade-bottom"></div>
        </div>
      </div>
    </div>
  )
}

export default Sword
