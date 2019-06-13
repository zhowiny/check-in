import Taro from '@tarojs/taro'
import './style.scss'
import {View} from "@tarojs/components"
import MxButton from '../mx-button'
import {mergeClassName} from '../../common/utils'

type Callback = (...args: any[]) => any | undefined | null
interface DialogProps {
  title?: string
  show: boolean
  closeOnClickMask?: boolean
  className?: string
  onConfirm?: Callback
  onCancel?: Callback
  onClose?: Callback
}

export default class MxDialog extends Taro.Component<DialogProps, {}> {
  static options = {
    addGlobalClass: true
  }

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

  handleClickOverlay (e) {
    if (this.props.closeOnClickMask) {
      this.setState({
          isVisable: false
        }, this.close.bind(this, e))
    }
  }
  close (e) {
    this.setState({isVisable: false})
    this.props.onClose && this.props.onClose(e)
  }
  cancel (e) {
    this.props.onCancel && this.props.onCancel(e)
  }
  confirm (e) {
    this.props.onConfirm && this.props.onConfirm(e)
  }

  render () {
    const {isVisable} = this.state
    return (
      <View className={mergeClassName('mx-dialog', {actived: isVisable})} >
        <View
          className={mergeClassName('mx-dialog--mask')}
          onClick={this.handleClickOverlay.bind(this)}
        />
        <View className={mergeClassName('mx-dialog--container')}>
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
