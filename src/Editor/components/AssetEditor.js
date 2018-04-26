import React from 'react'
import Button from '../../components/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import buttonStyle from '../../style/button.scss'

class AssetEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previewing: false,
      previewable: props.selected ? true : false
    }
  }

  render() {
    return (
      <div>
        <select id={this.props.selectId}
          value={this.props.selected}
          onChange={(e) => {
            this.setState({
              previewable: e.target.value ? true : false
            })
            this.props.onChange(e)
          }}>
            <option value="">
                None
            </option>
            {
              Object.keys(this.props.assets).map(key => {
                return (
                  <option key={key}
                    value={key}>
                      {key}
                  </option>
                )
              })
            }
        </select>
        {
          this.state.previewable &&
            <Button type="button"
              className={[
                buttonStyle.root,
                this.state.previewing ? buttonStyle.error : buttonStyle.warning
              ].join(' ')}
              onClick={(e) => {
                const willPreview = !this.state.previewing

                this.props.onPreviewToggle(willPreview ? this.props.selected : '')

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
                <span>
                  <FontAwesomeIcon icon={this.props.icon}
                    className={buttonStyle.icon} />
                  {this.state.previewing ? 'Cancel' : 'Preview'}
                </span>
            </Button>
        }
      </div>
    )
  }
}

export default AssetEditor
