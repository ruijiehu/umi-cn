import { getList } from '../services/api'
export default {
  namespace: 'globalData',
  state:{
    newsList: []
  },
  effects: {
    *getNewsList({payload}, {call, put}){
      const data = yield call(getList, payload)
      yield put({
        type: "getNews",
        payload: data
      })
    }
  },
  reducers: {
    getNews(state, action) {
      return {
        ...state,
        newsList: action.payload
      }
    }
  }
}