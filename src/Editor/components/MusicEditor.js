import React from 'react'
import { connect } from 'react-redux'
import { updateCurrentMusic } from '../../actions'
import musicChoices from '../../musicChoices'

class MusicEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      playable: false,
      selectedMusic: ''
    }
  }

  render() {
    return (
      <div>
        <select onChange={(e) => {
            this.setState({
              previewable: e.target.value ? true : false,
              selectedMusic: e.target.value
            })
            this.props.onChange({
              music: e.target.value
            })
          }}>
            <option value=""
              selected={false}
              disable={true}
              hidden={true}>
                Select Music
            </option>
            {
              Object.keys(musicChoices).map(key => {
                return (
                  <option key={key}
                    value={musicChoices[key]}>
                      {key}
                  </option>
                )
              })
            }
        </select>
        {
          this.state.previewable &&
            <button type="button"
              onClick={(e) => {
                const willPlay = !this.state.playing

                this.props.updateCurrentMusic(willPlay ? this.state.selectedMusic : '')

                this.setState({
                  playing: willPlay
                })
              }}
              onBlur={(e) => {
                this.props.updateCurrentMusic('')
                this.setState({
                  playing: false
                })
              }}>
                {this.state.playing ? 'Cancel' : 'Preview'}
            </button>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentMusic: src => {
      dispatch(updateCurrentMusic(src))
    }
  }
}

export default connect(null, mapDispatchToProps)(MusicEditor)
