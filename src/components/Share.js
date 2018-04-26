import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import share from '@fortawesome/fontawesome-free-solid/faShare'
import request from 'superagent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import Button from './Button'
import buttonStyle from '../style/button.scss'
import { saveToDB } from '../db'

const SUCCESS_MESSAGE = 'Copy the URL at the top of your browser and save it!';
const FAILURE_MESSAGE = 'Unable to save your game.  Ask a teacher for help!';

class Share extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      message: undefined,
    }
  }

  updateUrl = url => {
    this.props.history.push({
      search: `?url=${url}`,
    })
    return url
  }

  showSuccessMessage = () => {
    this.setState({
      open: true,
      message: SUCCESS_MESSAGE,
    })
  }

  showFailureMessage = () => {
    console.log('error', err)
    this.setState({
      open: true,
      message: FAILURE_MESSAGE,
    })
  }

  handleClick = () => {
    const { game } = this.props.state
    saveToDB({game})
      .then(this.updateUrl)
      .then(this.showSuccessMessage)
      .catch(this.showFailureMessage)
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    return (
      [<Button type="button"
        className={[buttonStyle.root, buttonStyle.error].join(' ')}
        onClick={this.handleClick}>
          <FontAwesomeIcon icon={share}
            className={buttonStyle.icon} /> Share
      </Button>,

      <MuiThemeProvider>
        <Snackbar
          open={this.state.open}
          message="Copy the URL at the top of your browser and send it!"
          autoHideDuration={5000}
          onRequestClose={this.handleRequestClose}
        />
      </MuiThemeProvider>]
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default withRouter(connect(mapStateToProps)(Share))
