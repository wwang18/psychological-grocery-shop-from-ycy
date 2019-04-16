// import request from "../utils/request";
// import {stringify} from 'qs';
import React from 'react';

export function initCards(params) {
  console.log(Storage, '22222')
  return Storage.load({ key: params.key })
          .then(res => { 
            console.log(11111)
            if(!res) {
              // Storage.save({ key: params.key, data: params.data }) 
              return params.data
            }
          })
          .catch(err => {
            // Storage.save({ key: params.key, data: params.data })
            return params.data
          })
}
// // 请求 信件list接口
// export function demo( params ) { 
//   return request(`/api/m1/letter/list?${stringify(params)}`);
// }
