// import { AsyncStorage } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import LETTER from './letterConfig';
import PERSON from './personConfig';
import GIFT from './giftConfig';

export const lockedImg = require('../../img/PQS/framework_GiftCard.png');
export const initCardStore = async () => {
    try {
        //const letter = await AsyncStorage.getItem('letter_cards');
        let str = '';
        //if (letter === null) {
        str = JSON.stringify(LETTER);
        await AsyncStorage.setItem('letter_cards', str);
        //}
        str = JSON.stringify(PERSON);
        await AsyncStorage.setItem('person_cards', str);
        str = JSON.stringify(GIFT);
        await AsyncStorage.setItem('gift_cards', str);
    } catch (error) {
        console.error('initCardStore() Error:', error);
    }
}
export const getCardValue = async (type) => {
    try {
        let result = await AsyncStorage.getItem(`${type}_cards`);
        console.log('-------------11', type, result)
        return JSON.parse(result) || [];
    } catch (error) {
        console.error('getCardValue() Error:', error);
    }
}
