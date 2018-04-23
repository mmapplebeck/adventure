import React from 'react'
import { connect } from 'react-redux'
import ChoiceEditor from './ChoiceEditor'
import MusicEditor from './MusicEditor'
import { deleteLevel, updateLevel, createChoice } from '../actions'

const LevelEditor = props => {
  return (
    <fieldset>
      <legend>{props.id}</legend>
      <label>
        Message
        <input type="text"
          value={props.message}
          onChange={(e) => {
            props.updateLevel(props.id, {
              message: e.target.value
            })
          }} />
      </label>
      <label>
        Music
        <MusicEditor onChange={e => {
          props.updateLevel(props.id, {
            music: e.target.value
          })
        }} />
      </label>
      <label>
        Background Image
        <input type="text"
          value={props.background_image}
          onChange={(e) => {
            props.updateLevel(props.id, {
              background_image: e.target.value
            })
          }} />
      </label>
      <fieldset>
        <legend>Choices</legend>
        {
          props.choices.map((choice, i) => (
            <ChoiceEditor
              key={i}
              id={i}
              levelId={props.id}
              {...choice} />
          ))
        }
        <button type="button"
          onClick={() => {
            props.createChoice(props.id)
          }}>
          Add Choice
        </button>
      </fieldset>
      {
        props.id !== 'start' &&
          <button onClick={() => props.deleteLevel(props.id)}>Delete</button>
      }

    </fieldset>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteLevel: id => {
      dispatch(deleteLevel(id))
    },
    updateLevel: (id, payload) => {
      dispatch(updateLevel(id, payload))
    },
    createChoice: levelId => {
      dispatch(createChoice(levelId))
    }
  }
}

export default connect(null, mapDispatchToProps)(LevelEditor)
