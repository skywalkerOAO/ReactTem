import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import api_Path from '../../API/index';

class store {
  @observable RuningRow: any = []
  @action.bound AddOthRow = async (params = {}) => {
    try {
      let res = await axios.post(api_Path.index_services, params)
      runInAction(() => {
        if (res.data.code == 200) {
          console.log(res.data)
          return
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}




export default new store()