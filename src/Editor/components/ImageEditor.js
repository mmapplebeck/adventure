import React from 'react'
import { connect } from 'react-redux'
import AssetEditor from './AssetEditor'
import { updateCurrentBackground } from '../../actions'
import images from '../../images'

const ImageEditor = props => {
  return (
    <AssetEditor
      defaultSelectText="Select Background Image"
      assets={images}
      onChange={props.onChange}
      onPreviewToggle={src => {
        props.updateCurrentBackground(src)
      }}  />
  )
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentBackground: src => {
      dispatch(updateCurrentBackground(src))
    }
  }
}

export default connect(null, mapDispatchToProps)(ImageEditor)
