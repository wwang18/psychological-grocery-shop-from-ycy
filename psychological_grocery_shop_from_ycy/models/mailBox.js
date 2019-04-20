import { initCards, saveCards } from '../services/mailBox';

export default {
  namespace: 'mailBox', 
  state: {
    mailBox: [], // 信封list
    letterCards: [], // 信件卡片list
    giftCards: [], // 礼物卡片list
    personCards: [], // 人物卡片list
    lockedImg: require('../img/PQS/framework_GiftCard.png'),
    isNew: false
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
    * saveParams({params}, {select, call, put}) {
      yield put({
          type: 'save',
          payload: params
        })
    },
    * changeMailBoxState({params}, {select, call, put}) {
      let data = yield call(saveCards, {key: params.key, list: params.data})
      yield put({
        type: 'save',
        payload: {[params.key]: data}
      })
    },
    * changeCardsState({params}, {select, call, put}) {
      let list = yield select( state => {
        return state.mailBox[params.key]
      } );
      let data = yield call(saveCards, {key: params.key, list, id: params.id, isNew: params.isNew})
      yield put({
        type: 'save',
        payload: {[params.key]: data}
      })
    },
    * saveData({params}, {select, call, put}) { //存储信卡片数据
      let newMailBox = yield select( state => {
        return state.mailBox.mailBox
      } );
      let newLetterCards = yield select( state => {
        return state.mailBox.letterCards
      } );
      let newGiftCards = yield select( state => {
        return state.mailBox.giftCards
      } );
      let newPersonCards = yield select( state => {
        return state.mailBox.personCards
      } );
      let lList= yield call(saveCards, {key: 'letterCards', list: newLetterCards, id: params.letterId, giftId: params.giftId, personalId: params.personalId})
      let gList= yield call(saveCards, {key: 'giftCards', list: newGiftCards, id: params.giftId})
      let pList= yield call(saveCards, {key: 'personCards', list: newPersonCards, id: params.personalId})
      let mList= yield call(saveCards, {key: 'mailBox', list: [params, ...newMailBox]})
      yield put({
          type: 'save',
          payload: [
            {mailBox: mList},
            {letterCards: lList},
            {giftCards: gList},
            {personCards: pList},
          ]
        })
      },
    * initCradsList({params}, {select, call, put}) {
      let data = yield call(initCards, params)
      yield put({
        type: 'save',
        payload: {[params.key]: data}
      })
    },
    * updateCradsList({params}, {select, call, put}) {
      let list = yield select( state => {
        return state.mailBox[params.key]
      } );
      let data = yield call(initCards, list)
      // console.log(data, 'data')
      yield put({
        type: 'save',
        payload: {[params.key]: data}
      })
    }
  }
};