import services from '../services/api'
export default {
  namespace: 'globalData',
  state:{
    // newsList: []
    test:''
  },
  effects: {
    *getNewsList({payload}, {call, put}){
      const {data} = yield call(services.getList, payload)
      // console.log(data);
      if(data.status === 200 && data){
        yield put({
          type: "getNews",
          payload: {
            newsList:data.data.list
          }
        })
      }
    }
  },
  reducers: {
    getNews(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
}