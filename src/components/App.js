import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import Editor from '../Editor'
import Player from '../Player'
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
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/edit'>Edit</Link>
          <Link to='/play'>Play</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path='/' render={props => {
              return (
                <div>Home</div>
              )
            }} />
            <Route path='/edit' component={Editor} />
            <Route path='/play' component={Player} />
          </Switch>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state // for debugging
  }
}

export default withRouter(connect(mapStateToProps)(App))
