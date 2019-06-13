import Taro from '@tarojs/taro'
import './style.scss'
import {View} from "@tarojs/components"
import MxButton from '../mx-button'

interface DialogProps {
  title?: string
  show: boolean,
  onConfirm?: (e) => any | undefined,
  onCancel?: (e) => any | undefined,
}

export default class MxDialog extends Taro.Component<DialogProps, {}> {
  defaultProps = {
    show: true,
  }


  state = {
    isVisable: true,
  }

  componentDidMount () {
    this.setState({isVisable: this.props.show})
  }

  constructor (props) {
    super(props)
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.isVisable !== nextProps.show) {
      this.setState({isVisable: nextProps.show})
    }
  }

  close () {
    this.setState({isVisable: false})
  }
  cancel (e) {
    this.close()
    this.props.onCancel && this.props.onCancel(e)
  }
  confirm (e) {
    e.stopPropagation()
    e.preventDefault()
    this.props.onConfirm && this.props.onConfirm(e)
    this.close()
  }

  render () {
    const {isVisable} = this.state
    return (
      <View className='mx-dialog'>
        <View className='mx-dialog--mask' onClick={this.close} style={{display: isVisable ? 'block' : 'none'}} />
        <View className='mx-dialog--container' style={{display: isVisable ? 'block' : 'none'}}>
          <View className='mx-dialog--title'>{this.props.title || '提示'}</View>
          <View className='mx-dialog--context'>{this.props.children}</View>
          <View className='mx-dialog--footer'>
            <MxButton style={{borderRadius: 0}} onClick={this.confirm.bind(this)} type='primary'>确认</MxButton>
            <MxButton style={{borderRadius: 0}} onClick={this.cancel.bind(this)} >取消</MxButton>
          </View>
        </View>
      </View>
    )
  }
}
