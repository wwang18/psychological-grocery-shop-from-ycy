import React, {Component} from 'react';
import {
	createStackNavigator,
	createAppContainer
}
from 'react-navigation';
import Home from './screens/Home'
import PageWriteLetter from './screens/PageWriteLetter';

const AppNavigator = createStackNavigator({
		Home: {
			screen: Home,
			navigationOptions: {
				header: null
			}
		},
		WriteLetter: {
			screen: PageWriteLetter,
			navigationOptions: {
				header: null
			}
		}
	}, {
		initialRouteName: "Home"
	});

export default createAppContainer(AppNavigator);
