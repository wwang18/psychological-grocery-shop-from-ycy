import { initCards } from '../services/mailbox';

export default {
  namespace: 'mailbox', 
  state: {
    letterCards: [], // 信件卡片list
    giftCards: [], //礼物卡片list
    personCards: [], //人物卡片list
  },
  reducers: {
    //保存
    save(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    },

  },
  effects: {
    * saveData({params}, {select, call, put}) {
    yield put({
        type: 'save',
        payload: params
      })
    },
    * initCradsList({params}, {select, call, put}) {
      let data = yield call(initCards, params)
      console.log(data, 'data')
      // yield put({
      //   type: 'save',
      //   payload: {[item.key]: res}
      // })
    }
  }
};