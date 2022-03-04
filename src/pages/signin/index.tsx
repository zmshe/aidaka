import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro'
import { observer } from 'mobx-react-lite'
import { AtForm, AtInput, AtList, AtListItem, AtAvatar, AtButton } from 'taro-ui'
import { View, Picker, Text, Button } from '@tarojs/components';
import request from '../../utils/request'
import { WeightUnitMap, WeightRange, WeightNumRange, WeightUnitRange } from './index.d';
import store from '../../store/app'

import './index.scss'



function Index() {
  const { userinfo } = store
  const [data, setData] = useState({
    name: '',
    stature: '',
    sex: '男',
    cweight: [10, 0, 0]
  },
  )
  const [weidhtRange, setWeightRange] = useState(WeightRange[0])

  useEffect(() => {
    Taro.showShareMenu({ withShareTicket: false })
    Taro.getUserInfo().then((res) => {
      console.log(res, "res")
    })
  }, [])

  const setDataHandle = (key: string, value: any) => {
    setData({
      ...data,
      [key]: value
    })
  }

  const onSubmit = () => {
    Taro.login().then((res) => {
      request('/aidaka/login', { data: { code: res.code } })
      Taro.getUserInfo({ withCredentials: true }).then((aaa) => {
        console.log(aaa)
      })
    })
  }
  const getUserInfo = (event) => {
    console.log(event, "event")
  }

  const sexList = [
    { label: '男', value: '男' },
    { label: '女', value: '女' },
  ]

  console.log(data, "Data")
  return <View className='signin'>
    <View className='signin-card'>
      <AtAvatar className='signin-card-avatar' image={userinfo.avatarUrl}></AtAvatar>
      <View className='signin-card-info'>
        <View className='signin-card-info-nickname'>{data.name || '昵称区域'}</View>
      </View>
    </View>
    <View className='signin-form'>
      <View className='signin-form-sex'>
        {sexList.map((item) => (
          <View
            style={{ color: data.sex === item.label ? '#6190e8' : '' }} key={item.label} onClick={() => {
              setDataHandle('sex', item.value)
            }}
          >{item.label}</View>
        ))}
      </View>
      <AtInput
        name='name'
        title='昵称'
        type='text'
        placeholder='请输入昵称'
        value={data.name}
        onChange={(value) => {
          setDataHandle('name', value)
        }}
      />
      <AtInput
        name='stature'
        title='身高'
        type='number'
        placeholder='请输入身高'
        value={data.stature}
        maxlength={3}
        onChange={(value) => {
          setDataHandle('stature', value)
        }}
      >
        <Text style={{ paddingRight: '8px' }}>cm</Text>
      </AtInput>
      <Picker
        mode='multiSelector'
        range={[weidhtRange, WeightNumRange, WeightUnitRange]}
        value={data.cweight}
        onColumnChange={(event) => {
          if (event.detail.column === 2) {
            setData({
              ...data,
              cweight: [data.cweight[0], data.cweight[1], event.detail.value]
            })
            setWeightRange(WeightRange[event.detail.value])
          }

        }}
        onChange={(value) => {
          setDataHandle('cweight', value.detail.value)
          console.log(WeightRange, value.detail.value[2])

        }}
      >
        <AtList>
          <AtListItem
            title='初始体重'
            extraText={`${WeightRange[data.cweight[2]][data.cweight[0]]}.${data.cweight[1]}${WeightUnitMap[data.cweight[2]]}`}
          />
        </AtList>
      </Picker>
    </View>


    <AtButton type='primary' onClick={onSubmit}>提交</AtButton>
  </View>
}

export default observer(Index)