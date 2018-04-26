import React from 'react'
import { connect } from 'react-redux'
import AssetEditor from './AssetEditor'
import { updatePreview } from '../actions'
import images from '../../images'
import image from '@fortawesome/fontawesome-free-solid/faImage'

const ImageEditor = props => {
  return (
    <AssetEditor
      {...props}
      assets={images}
      onPreviewToggle={src => {
        props.updatePreview({
          previewBackground: src
        })
      }}
      icon={image} />
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
