export default {
  namespace: 'mailbox', 
  state: {
    letterCard: [], // 信件卡片list
    giftCard: [], //礼物卡片list
    personCard: [], //人物卡片list
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
    * saveCradList({params=[]}, {select, call, put}) {
      let list = [];
      for(let i=0; i < params.length; i++) {
        Storage.load({ key: item.key })
              .then(res => { 
                if(!res) {
                  Storage.save({ key: item.key, data: item.data }) 
                  list.push({[item.key]: res})
                }
              })
              .catch(err => {
                Storage.save({ key: item.key, data: item.data })
                list.push({[item.key]: res})
              })
      }
     
      yield put({
        type: 'save',
        payload: {[item.key]: res}
      })
    }
  }
};