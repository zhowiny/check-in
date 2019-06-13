import Taro from '@tarojs/taro'
import './style.scss'
import {Button} from "@tarojs/components"

type Callback = (...args: any[]) => any | undefined | null
interface ButtonProps {
  className?: string
  style?: any
  type?: 'default' | 'primary' | 'danger' | 'info' | 'success' | 'warning'
  size?: 'medium' | 'small' | 'mini'
  disabled?: boolean
  round?: boolean
  plain?: boolean
  openType?: 'contact' | 'share' | 'getUserInfo' | 'getPhoneNumber' | 'launchApp' | 'openSetting' | 'feedback' | 'getRealnameAuthInfo'
  loading?: boolean
  onClick?: Callback
  onGetUserInfo?: Callback
  onContact?: Callback
  onGetPhoneNumber?: Callback
  onError?: Callback
  onOpenSetting?: Callback
}

export default class MxButton extends Taro.Component<ButtonProps, {}> {
  static options = {
    addGlobalClass: true
  }

  defaultProps = {
    type: 'default',
    className: '',
    openType: '',
    loading: false,
    size: '',
    disabled: false,
    round: false,
    plain: false,
    stopPropagation: false,
    preventDefault: false,
  }

  constructor (props) {
    super(props)
  }

  handleClick (type, e) {
    if (!this.props.disabled) {
      this.props[type] && this.props[type](e)
    }
    e.stopPropagation()
    e.preventDefault()
  }

  render () {
    const {className, openType, loading, type, size, disabled, round, plain} = this.props
    let classList = ['mx-button']
    className && classList.push(...className.split(' '))
    classList.push(`mx-button--${type}`)
    size && classList.push(`mx-button--${size}`)
    disabled && classList.push(`is-disabled`)
    round && classList.push(`is-round`)
    plain && classList.push(`is-plain`)

    return (
      <Button
        className={classList.join(' ')}
        style={this.props.style}
        hoverClass="hover"
        hoverStartTime={0}
        hoverStayTime={0}
        open-type={openType}
        loading={loading}
        disabled={disabled || loading}
        onClick={this.handleClick.bind(this, 'onClick')}
        onGetUserInfo={this.handleClick.bind(this, 'onGetUserInfo')}
        onContact={this.handleClick.bind(this, 'onContact')}
        onGetPhoneNumber={this.handleClick.bind(this, 'onGetPhoneNumber')}
        onOpenSetting={this.handleClick.bind(this, 'onOpenSetting')}
        onError={this.handleClick.bind(this, 'onError')}
      >{this.props.children}</Button>
    )
  }
}
