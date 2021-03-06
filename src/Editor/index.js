import React from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import LevelEditor from './components/LevelEditor'
import MusicEditor from './components/MusicEditor'
import ImageEditor from './components/ImageEditor'
import Button from '../components/Button'
import { createLevel, updateGame } from './actions'
import images from '../images'
import music from '../music'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import plus from '@fortawesome/fontawesome-free-solid/faPlus'
import buttonStyle from '../style/button.scss'
import style from './style.scss'

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      creatingNewLevel: false,
      newLevelId: ''
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={{
          appear: style.appear,
          appearActive: style.appearActive
        }}
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}>
          <div className={style.root}
            style={this.props.editor.previewBackground ? {
              backgroundImage: `url(${images[this.props.editor.previewBackground]})`
            } : {}}>
            {
              this.props.editor.previewMusic &&
              <audio src={music[this.props.editor.previewMusic]}
                autoPlay
                loop>
              </audio>
            }
            <form className={style.form}>
              <fieldset>
                <legend>Game Defaults</legend>
                <label htmlFor="game__music">
                  Music
                  <MusicEditor
                    selectId="game__music"
                    selected={this.props.game.music}
                    onChange={e => {
                      this.props.updateGame({
                        music: e.target.value
                      })
                    }} />
                </label>
                <label htmlFor="game__background">
                  Background Image
                  <ImageEditor
                    selectId="game__background"
                    selected={this.props.game.background_image}
                    onChange={e => {
                      this.props.updateGame({
                        background_image: e.target.value
                      })
                    }} />
                </label>
              </fieldset>
              <fieldset>
                <legend>Levels</legend>
                {
                  Object.keys(this.props.game.levels).map(id => (
                    <LevelEditor key={id}
                      id={id}
                      {...this.props.game.levels[id]} />
                  ))
                }
                {
                  !this.state.creatingNewLevel &&
                    <Button type="button"
                      className={[buttonStyle.root, buttonStyle.success].join(' ')}
                      onClick={() => {
                        this.setState({
                          creatingNewLevel: true
                        })
                      }}>
                        <span>
                          <FontAwesomeIcon icon={plus}
                          className={buttonStyle.icon} />
                          Create Level
                        </span>
                    </Button>
                }
                {
                  this.state.creatingNewLevel &&
                    <div className={style.inputGroup}>
                      <input type="text"
                        placeholder="Enter new level name"
                        value={this.state.newLevelId}
                        onChange={(e) => this.setState({
                          newLevelId: e.target.value
                        })} />
                      <Button type="button"
                        className={[buttonStyle.root, buttonStyle.error].join(' ')}
                        onClick={() => {
                          this.setState({
                            creatingNewLevel: false,
                            newLevelId: ''
                          })
                        }}>
                          <span>Cancel</span>
                      </Button>
                      <Button type="button"
                        className={[buttonStyle.root, buttonStyle.success].join(' ')}
                        onClick={() => {
                          this.setState({
                            creatingNewLevel: false,
                            newLevelId: ''
                          })
                          this.props.createLevel(this.state.newLevelId)
                        }}>
                          <span>Create</span>
                      </Button>
                    </div>
                }
              </fieldset>
            </form>
          </div>
      </ReactCSSTransitionGroup>
    )
  }
}

const mapStateToProps = ({game, editor}) => {
  return {
    game,
    editor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createLevel: (id) => {
      dispatch(createLevel(id))
    },
    updateGame: payload => {
      dispatch(updateGame(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
