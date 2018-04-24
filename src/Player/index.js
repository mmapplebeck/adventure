import React from 'react'
import { connect } from 'react-redux'
import { updateCurrentLevel } from './actions'
import images from '../images'
import music from '../music'
import style from './style.scss'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.props.updateCurrentLevel('start')
  }

  render() {
    return (
      <div style={this.props.background ? {
          backgroundImage: `url(${images[this.props.background]})`
        } : {}}
        className={style.root}>
          {
            this.props.music &&
            <audio src={music[this.props.music]}
              autoPlay
              loop>
            </audio>
          }
          <div>{this.props.message}</div>
          {
            this.props.choices.map((choice, i) => {
              return (
                <button type="button"
                  key={i}
                  onClick={() => {
                    if (!choice.nextLevel) return
                    this.props.updateCurrentLevel(choice.nextLevel)
                  }}>
                  {choice.text}
                </button>
              )
            })
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const level = state.game.levels[state.player.currentLevel]
  const background = level.background_image || state.game.background_image || ''
  const music = level.music || state.game.music || ''
  const { message, choices } = level

  return {
    background,
    music,
    message,
    choices
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentLevel: id => {
      dispatch(updateCurrentLevel(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
