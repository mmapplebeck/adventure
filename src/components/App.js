import React from 'react'
import { connect } from 'react-redux'
import Editor from '../Editor'
import 'normalize.css'
import style from '../style.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('state', this.props.state) // for debugging
  }

  componentDidUpdate() {
    console.log('state', this.props.state) // for debugging
  }

  render() {
    return (
      <div className={style.root}
        style={this.props.state.currentBackground ? {
          backgroundImage: `url(${this.props.state.currentBackground})`
        } : {}}>
        <audio src={this.props.state.currentMusic || ''}
          autoPlay
          loop>
        </audio>
        <Editor />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state // for debugging
  }
}

export default connect(mapStateToProps)(App)
