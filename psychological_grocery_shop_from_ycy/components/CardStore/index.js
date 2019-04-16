import LETTER from './letterConfig';
import PERSON from './personConfig';
import GIFT from './giftConfig';

export const lockedImg = require('../../img/PQS/framework_GiftCard.png');
export const initCardStore = async () => {
    try {
        // //清除脏数据
        // Storage.remove({key: 'letterCards'})
        // Storage.remove({key: 'personCards'})
        // Storage.remove({key: 'giftCards'})
        // return
        initSaveCard('letterCards', LETTER);
        initSaveCard('personCards', PERSON);
        initSaveCard('giftCards', GIFT);
    } catch (error) {
        // console.error('initCardStore() Error:', error);
    }
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
export let initSaveCard = (key, data) => {
    Storage.load({ key })
            .then(res => { if(!res) Storage.save({ key, data }) })
            .catch(err => Storage.save({ key, data }) )
}