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
    console.log(e, 'comfirm')
  }
  onCancel (e) {
    console.log(e, 'onCancel')
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View onClick={() => this.open()}  style={{width: '200px', height: '200px', backgroundColor: '#aaf'}}>
          <MxButton type='primary' >open dialog</MxButton>
        </View>
        <MxDialog title='哈哈哈' show={this.state.show} onConfirm={this.onConfirm} onCancel={this.onCancel}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda at cupiditate dolor dolores ducimus est expedita explicabo facere illum, labore maxime porro quam quia quis quisquam quod reiciendis veritatis.</Text>
        </MxDialog>
      </View>
    )
  }
}
