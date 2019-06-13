import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import MxButton from '../../components/mx-button'
import MxDialog from '../../components/mx-dialog'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    show: false
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  open () {
    this.setState({show: true})
  }
  onConfirm (e) {
    // do something...
    this.close(e)
  }
  onCancel (e) {
    // do something...
    this.close(e)
  }
  close (e) {
    console.log(e)
    this.setState({show: false})
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View style={{width: '200px', height: '200px', backgroundColor: '#aaf'}}>
          <MxButton onClick={() => this.open()} className='btn' type='primary' >open dialog</MxButton>
        </View>
        <MxDialog
          closeOnClickMask
          className='dialog' title='哈哈哈'
          show={this.state.show}
          onConfirm={this.onConfirm.bind(this)}
          onCancel={this.onCancel.bind(this)}
        >
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda at cupiditate dolor dolores ducimus est expedita explicabo facere illum, labore maxime porro quam quia quis quisquam quod reiciendis veritatis.</Text>
        </MxDialog>
      </View>
    )
  }
}
