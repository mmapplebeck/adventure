import React from 'react'
import { connect } from 'react-redux'
import AssetEditor from './AssetEditor'
import { updatePreview } from '../actions'
import images from '../../images'

const ImageEditor = props => {
  return (
    <AssetEditor
      {...props}
      assets={images}
      onPreviewToggle={src => {
        props.updatePreview({
          previewBackground: src
        })
      }} />
  )
}

const mapDispatchToProps = dispatch => {
  return {
    updatePreview: payload => {
      dispatch(updatePreview(payload))
    }
  }
}

export default connect(null, mapDispatchToProps)(ImageEditor)
