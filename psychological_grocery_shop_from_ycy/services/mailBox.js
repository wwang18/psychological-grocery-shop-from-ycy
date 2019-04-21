// import request from "../utils/request";
// import {stringify} from 'qs';
export function initCards(params) {
  return Storage.load({ key: params.key })
          .then(res => { 
            if(!res) {
              return params.data
            } else {
              return res
            }
          })
          .catch(err => {
            return params.data
          })
}
export function saveCards(params) {
  const { key, id=null, isNew=null, list, giftId=null, personalId=null } = params;
  let newlist = '';
  if(Array.isArray(list)) {
    newlist = [...list];
    if(id !== null && list.length > 0) {
      if(giftId && personalId) {
        newlist[id].giftId = giftId;
        newlist[id].personalId = personalId;
      }
      if(isNew === null) {
        newlist[id].isNew = true;
        newlist[id].unlocked = true;
      } else {
        newlist[id].isNew = isNew;
      }
    }
  } else {
    newlist = list;
  }
  Storage.save({ key, data: newlist})
  return newlist;
}
export function saveMailBoxState(params) {
  const { key, data } = params;
  Storage.save({ key, data})
  return data;
}
// // 请求 信件list接口
// export function demo( params ) { 
//   return request(`/api/m1/letter/list?${stringify(params)}`);
// }
