import Taro from '@tarojs/taro'
// import { useState } from 'react'
import { View, Text } from '@tarojs/components';
// import request from '../../utils/request'
import './index.scss'

function Index(){
  return  <View className='index'>
  {/* <Text onClick={() => {
    Taro.login().then((res) => {
      request('/aidaka/login', {data: {code:res.code}})
      Taro.getUserInfo({withCredentials:true}).then((aaa) => {
        console.log(aaa)
      })
    })
  }}
  >
    登录
  </Text> */}
  <View onClick={() => {
    Taro.getUserInfo().then((res) => {
      console.log(res)
    })
  }}
  >aaa</View>
</View>
}
export default Index