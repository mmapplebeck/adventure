import React from 'react'

class AssetEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previewing: false,
      previewable: false,
      selected: ''
    }
  }

  render() {
    return (
      <div>
        <select onChange={(e) => {
            this.setState({
              previewable: e.target.value ? true : false,
              selected: e.target.value
            })
            this.props.onChange(e)
          }}>
            <option value=""
              selected={false}
              disable={true}
              hidden={true}>
                {this.props.defaultSelectText}
            </option>
            {
              Object.keys(this.props.assets).map(key => {
                return (
                  <option key={key}
                    value={this.props.assets[key]}>
                      {key}
                  </option>
                )
              })
            }
        </select>
        {
          this.state.previewable &&
            <button type="button"
              onClick={(e) => {
                const willPreview = !this.state.previewing

                this.props.onPreviewToggle(willPreview ? this.state.selected : '')

                this.setState({
                  previewing: willPreview
                })
              }}
              onBlur={(e) => {
                this.props.onPreviewToggle('')
                this.setState({
                  previewing: false
                })
              }}>
                {this.state.previewing ? 'Cancel' : 'Preview'}
            </button>
        }
      </div>
    )
  }
}

export default AssetEditor
