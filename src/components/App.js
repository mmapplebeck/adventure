import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Editor from '../Editor'
import Player from '../Player'
import 'normalize.css'
import style from '../style/app.scss'

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
      <div className={style.root}>
        <Menu />
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
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
