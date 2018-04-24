import React from 'react'
import { connect } from 'react-redux'
import { updateChoice, deleteChoice } from '../actions'

const ChoiceEditor = props => {
  return (
    <fieldset>
      <legend>{props.id + 1}</legend>
      <label>Text</label>
      <input type="text"
        value={props.text}
        onChange={(e) => {
          props.updateChoice(props.levelId, props.id, {
            text: e.target.value
          })
        }} />
        <label>Next Level</label>
        <select value={props.nextLevel}
          onChange={(e) => {
            props.updateChoice(props.levelId, props.id, {
              nextLevel: e.target.value
            })
          }}>
            <option value="">
              Select Next Level
            </option>
            {
              Object.keys(props.levels).map(id => (
                <option value={id}
                  key={id}>
                    {id}
                </option>
              ))
            }
        </select>
        <button type="button"
          onClick={() => props.deleteChoice(props.levelId, props.id)}>
            Delete Choice
        </button>
    </fieldset>
  )
}

const mapStateToProps = ({game}) => {
    return {
      levels: game.levels
    }
}

const mapDispatchToProps = dispatch => {
  return {
    updateChoice: (levelId, choiceId, payload) => {
      dispatch(updateChoice(levelId, choiceId, payload))
    },
    deleteChoice: (levelId, choiceId) => {
      dispatch(deleteChoice(levelId, choiceId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceEditor)
