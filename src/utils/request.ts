import Taro from "@tarojs/taro";

const baseUrl = 'http://10.43.123.148:5001'

const request = async (url, options?) => {
  const result = Taro.request({
    url: `${baseUrl}${url}`,
    method: 'POST',
    ...options
  })
  return result
}

export default request