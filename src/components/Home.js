import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../fonts/avengeance/style.scss'
import style from '../style/home.scss'

const Home = props => {
  return (
    <div className={style.root}>
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
    </div>
  )
}

export default Home
