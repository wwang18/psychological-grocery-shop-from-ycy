import LETTER from './letterConfig';
import PERSON from './personConfig';
import GIFT from './giftConfig';

export const lockedImg = require('../../img/PQS/framework_GiftCard.png');
export const delCardValue = async () => {
    //清除数据
    Storage.remove({key: 'letterCards'})
    Storage.remove({key: 'personCards'})
    Storage.remove({key: 'giftCards'})
    Storage.remove({key: 'mailBox'})
    Storage.remove({key: 'boughtDaily'})
};
export const initCardStore = (props) => {
    const { dispatch } = props;
    dispatch({ 
      type: 'mailBox/initCradsList',
      params: {
        key: 'letterCards',
        data: LETTER
      }
    })
    dispatch({ 
      type: 'mailBox/initCradsList',
      params: {
        key: 'personCards',
        data: PERSON
      }
    })
    dispatch({ 
      type: 'mailBox/initCradsList',
      params: {
        key: 'giftCards',
        data: GIFT
      }
    })
    dispatch({ 
      type: 'mailBox/initCradsList',
      params: {
        key: 'mailBox',
        data: []
      }
    })
    dispatch({ 
      type: 'mailBox/initCradsList',
      params: {
        key: 'isNew',
        data: false
      }
    })
}
export const getCardValue = async (type) => {
    try {
        return Storage.load({ key: `${type}Cards` })
                .then(res => {
                    console.log(res, 'res')
                    return res || [];
                })
                .catch(err => {
                    return []
                })
    } catch (error) {
        // console.error('getCardValue() Error:', error);
    }
}

