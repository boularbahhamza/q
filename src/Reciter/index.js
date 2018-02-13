import React from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getReciter } from './actions'
import { startTrack } from '../Player/actions'

import ReciterDetails from './components'

class ReciterDetailsContainer extends React.Component {
  componentDidMount () {
    this.props.getReciter(this.props.match.params.id)
  }
  render () {
    const {reciter, startTrack} = this.props
    return <ReciterDetails onStartTrack={startTrack} reciter={reciter} />
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getReciter, startTrack }, dispatch)
}
const mapStateToProps = (state) => {
  return R.pick(['reciter'], state)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReciterDetailsContainer)