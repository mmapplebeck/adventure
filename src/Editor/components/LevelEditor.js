import React from 'react'
import { connect } from 'react-redux'
import ChoiceEditor from './ChoiceEditor'
import MusicEditor from './MusicEditor'
import ImageEditor from './ImageEditor'
import Button from '../../components/Button'
import { deleteLevel, updateLevel, createChoice } from '../actions'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import plus from '@fortawesome/fontawesome-free-solid/faPlus'
import trash from '@fortawesome/fontawesome-free-solid/faTrash'
import buttonStyle from '../../style/button.scss'

const LevelEditor = props => {
  return (
    <fieldset>
      <legend>{props.id}</legend>
      <label htmlFor={`${props.id}__message`}>
        Message
        <input type="text"
          id={`${props.id}__message`}
          value={props.message}
          placeholder="Enter your message"
          onChange={(e) => {
            props.updateLevel(props.id, {
              message: e.target.value
            })
          }} />
      </label>
      <label htmlFor={`${props.id}__music`}>
        Music
        <MusicEditor
          selectId={`${props.id}__music`}
          selected={props.music}
          onChange={e => {
            props.updateLevel(props.id, {
              music: e.target.value
            })
          }} />
      </label>
      <label htmlFor={`${props.id}__background`}>
        Background Image
        <ImageEditor
          selectId={`${props.id}__background`}
          selected={props.background_image}
          onChange={e => {
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
        <Button type="button"
          className={[buttonStyle.root, buttonStyle.success].join(' ')}
          onClick={() => {
            props.createChoice(props.id)
          }}>
          <FontAwesomeIcon icon={plus}
            className={buttonStyle.icon} />
          Add Choice
        </Button>
      </fieldset>
      {
        props.id !== 'start' &&
          <Button className={[buttonStyle.root, buttonStyle.error].join(' ')}
            onClick={() => props.deleteLevel(props.id)}>
            <span>
              <FontAwesomeIcon icon={trash}
                className={buttonStyle.icon} />
              Delete Level
            </span>
          </Button>
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
