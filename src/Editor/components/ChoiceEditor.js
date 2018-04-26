import React from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import { updateChoice, deleteChoice } from '../actions'
import buttonStyle from '../../style/button.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import trash from '@fortawesome/fontawesome-free-solid/faTrash'

const ChoiceEditor = props => {
  const choiceId = props.id + 1
  const choicePrefix = `${props.levelId}__choice-${choiceId}`
  return (
    <fieldset>
      <legend>{choiceId}</legend>
      <label htmlFor={`${choicePrefix}-text`}>
        Text
        <input type="text"
          id={`${choicePrefix}-text`}
          placeholder="Enter your choice text"
          value={props.text}
          onChange={(e) => {
            props.updateChoice(props.levelId, props.id, {
              text: e.target.value
            })
          }} />
      </label>
      <label htmlFor={`${choicePrefix}-nextLevel`}>
        <div>Next Level</div>
        <select value={props.nextLevel}
          id={`${choicePrefix}-nextLevel`}
          onChange={(e) => {
            props.updateChoice(props.levelId, props.id, {
              nextLevel: e.target.value
            })
          }}>
            <option value="">
              None
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
      </label>
      <Button type="button"
        className={[buttonStyle.root, buttonStyle.error].join(' ')}
        onClick={() => props.deleteChoice(props.levelId, props.id)}>
          <FontAwesomeIcon icon={trash}
            className={buttonStyle.icon} />
          <span>Delete Choice</span>
      </Button>
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
