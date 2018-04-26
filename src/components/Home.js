import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Sword from './Sword'
import music from '../music'
import style from '../style/home.scss'

const Home = props => {
  return (
    <div className={style.root}>
      <audio src={music['Adventure']}
        autoPlay
        loop>
      </audio>
      <h1 className={style.heading}>

        <ReactCSSTransitionGroup
          transitionName={{
            appear: style.enterStep1,
            appearActive: style.enterStep1Active
          }}
          transitionAppear={true}
          transitionAppearTimeout={200}
          transitionEnter={false}
          transitionLeave={false}>
            <div className={style.step1}>Choose</div>
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName={{
            appear: style.enterStep2,
            appearActive: style.enterStep2Active
          }}
          transitionAppear={true}
          transitionAppearTimeout={400}
          transitionEnter={false}
          transitionLeave={false}>
            <div className={style.step2}>Your Own</div>
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName={{
            appear: style.enterStep3,
            appearActive: style.enterStep3Active
          }}
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnter={false}
          transitionLeave={false}>
            <div className={style.step3}>Adventure</div>
        </ReactCSSTransitionGroup>

      </h1>
      <Sword />
      <Sword />
    </div>
  )
}

export default Home
