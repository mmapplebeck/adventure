import React from 'react'
import { connect } from 'react-redux'
import AssetEditor from './AssetEditor'
import { updatePreview } from '../actions'
import music from '../../music'

const MusicEditor = props => {
  return (
    <AssetEditor
      {...props}
      assets={music}
      onPreviewToggle={src => {
        props.updatePreview({
          previewMusic: src
        })
      }}  />
  )
}

const mapDispatchToProps = dispatch => {
  return {
    updatePreview: payload => {
      dispatch(updatePreview(payload))
    }
  }
}

export default connect(null, mapDispatchToProps)(MusicEditor)
