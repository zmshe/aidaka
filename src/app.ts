// import { } from 'react';
import Taro, {useDidShow} from '@tarojs/taro'
import store from './store/app'
import './app.scss'

function App(props) {
  useDidShow(() => {
    Taro.setStorage({key: 'openid', data: 'test'})
    Taro.getStorageSync('openid')
    Taro.getUserInfo().then((res) => {
      store.userinfo = res.userInfo
    })
  })
  return props.children
}
 
export default App
