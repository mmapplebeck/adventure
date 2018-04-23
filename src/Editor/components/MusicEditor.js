import React from 'react'
import { connect } from 'react-redux'
import AssetEditor from './AssetEditor'
import { updateCurrentMusic } from '../../actions'
import music from '../../music'

const MusicEditor = props => {
  return (
    <AssetEditor
      {...props}
      assets={music}
      onPreviewToggle={src => {
        props.updateCurrentMusic(src)
      }}  />
  )
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentMusic: src => {
      dispatch(updateCurrentMusic(src))
    }
  }
}

export default connect(null, mapDispatchToProps)(MusicEditor)
