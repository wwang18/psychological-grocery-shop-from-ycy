import React from 'react';
import { StyleSheet, Image, Alert } from 'react-native';

const IMAGE_BASE_PATH = '../img/cards';
const CHANCES = {
  R: 0.60,  // 60%
  SR: 0.30,  // 30%
  SSR: 0.10,  // 10%
};

const IDS = {
  R: [1],
  SR: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  SSR: [1, 2, 3, 4, 5, 6],
};

const CARDS = {
  R: [
    require(`${IMAGE_BASE_PATH}/R/1.jpg`),
  ],
  SR: [
    require(`${IMAGE_BASE_PATH}/SR/1.jpg`),
    require(`${IMAGE_BASE_PATH}/SR/2.jpg`),
    require(`${IMAGE_BASE_PATH}/SR/3.jpg`),
    require(`${IMAGE_BASE_PATH}/SR/4.jpg`),
    require(`${IMAGE_BASE_PATH}/SR/5.jpg`),
    require(`${IMAGE_BASE_PATH}/SR/6.jpg`),
    require(`${IMAGE_BASE_PATH}/SR/7.jpg`),
    require(`${IMAGE_BASE_PATH}/SR/8.jpg`),
    require(`${IMAGE_BASE_PATH}/SR/9.jpg`),
  ],
  SSR: [
    require(`${IMAGE_BASE_PATH}/SSR/1.jpg`),
    require(`${IMAGE_BASE_PATH}/SSR/2.jpg`),
    require(`${IMAGE_BASE_PATH}/SSR/3.jpg`),
    require(`${IMAGE_BASE_PATH}/SSR/4.jpg`),
    require(`${IMAGE_BASE_PATH}/SSR/5.jpg`),
    require(`${IMAGE_BASE_PATH}/SSR/6.jpg`),
  ],
}

function getRandomId(rarity) {}

export const Giftcard = (props) => {
  return (
    <Image
      source={CARDS[props.rarity][props.cardId]}
      style={props.style || styles.fullScreen} />
  )
}

export const getRandomGiftcard = () => {
  const dice = Math.random();
  let rarity = 'R';
  
  if (dice < CHANCES.SSR) {
    rarity = 'SSR';
  } else if (dice < CHANCES.SSR + CHANCES.SR) {
    rarity = 'SR';
  } else {
    rarity = 'R';
  }

  const cardId = Math.floor(Math.random() * IDS[rarity].length);
  return { rarity, cardId};
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
});

export default Giftcard;