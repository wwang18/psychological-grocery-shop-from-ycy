export default {
  namespace: 'mailbox', 
  state: {
    letterList: [], // 信件list
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
    }
  }
};