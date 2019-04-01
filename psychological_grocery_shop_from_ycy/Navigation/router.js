import React, {
	Component
}
from 'react';

import {
	Platform,
	StyleSheet,
	Text,
	View,
	ImageBackground,
	AppRegistry,
	Button,
	Alert
}
from 'react-native';

import {
	createStackNavigator,
	createAppContainer
}
from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    MailBox_i:PageMailBox_i,
    MailToChaoYue_j:PageMailToChaoYue_j,
  },
  {
    initialRouteName: "Home"
  }
);