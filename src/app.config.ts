export default defineAppConfig({
  pages: [
    'pages/signin/index',
    'pages/index/index',
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index'
      },
      {
        text: '我的',
        pagePath: 'pages/my/index'
      }
    ]
  }
})
