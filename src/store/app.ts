import {makeAutoObservable} from 'mobx'

class Index {
  userinfo:any = {}
  constructor(){
    makeAutoObservable(this)
  }
}

export default new Index()