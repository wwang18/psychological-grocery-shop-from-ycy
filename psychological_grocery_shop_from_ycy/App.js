import React, {Component} from 'react';
import {
	createStackNavigator,
	createAppContainer
}
from 'react-navigation';
import Home from './screens/Home'
import PageWriteLetter from './screens/PageWriteLetter';
import PageMailBox_i from './screens/PageMailBox_i';

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
		},
		MailBox_i: {
        			screen: PageMailBox_i,
        			navigationOptions: {
        				header: null
        			}
        		},
	}, {
		initialRouteName: "Home"
	});

export default createAppContainer(AppNavigator);
