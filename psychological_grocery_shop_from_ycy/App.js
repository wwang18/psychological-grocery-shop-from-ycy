/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

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
import Orientation from 'react-native-orientation';
import {
	createStackNavigator,
	createAppContainer
}
from 'react-navigation';

import PageWriteLetter from './screens/PageWriteLetter';
import RNExitApp from 'react-native-exit-app';
import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
		ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
		android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
	});

type Props = {};

class HomeScreen extends React.Component {
	componentWillMount() {
		Orientation.lockToLandscape();
	}

	_onPressButton_hist_letter() {
    	Alert.alert('本地存档的历史信件.')
    }

    _onPressButton_creator() {
        Alert.alert('开发人员表')
    }

    _onPressButton_bgm() {
        Alert.alert('大佬们的BGM')
    }

    componentDidMount() {
        SplashScreen.hide()
    }

    _onPressButton_exit() {
       RNExitApp.exitApp();
    }

	render() {
		return (
			 < ImageBackground
			style = { {
					flex: 1
				}
			}
			source = {
				require("./img/ycy_open.jpg")
			}
			 >

			 < View style = { {
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'space-between'
				}
			}
			 >
			 < View style = { {
					flex: 5
				}
			}
			/>
									      <View style={{
									              flex: 3,
									              flexDirection: 'column',
									              alignItems: 'flex-end',
									              justifyContent: 'space-between'}}>
									        <View style={{flex: 1,width: 50}} / >
			 < View style = {
				styles.buttonContainer
			}
			 >
			 < Button
			onPress = {
				() => this.props.navigation.push('WriteLetter')
			}
			title = "写信给超越"
				/>
												        </View >
				 < View style = { {
					flex: 1,
					width: 50
				}
			}
			/>
									        <View style={styles.buttonContainer}>
									          <Button
									            onPress={this._onPressButton_hist_letter}
									            title="心灵的秘密花园"
									          / >
			 <  / View >
			 < View style = { {
					flex: 1,
					width: 50
				}
			}
			/>
									        <View style={styles.buttonContainer}>
									          <Button
									            onPress={this._onPressButton_creator}
									            title="进店看看"
									          / >
			 <  / View >
			 < View style = { {
					flex: 1,
					width: 50
				}
			}
			/>
									        <View style={styles.buttonContainer}>
									          <Button
									            onPress={this._onPressButton_bgm}
									            title="BGM"
									          / >
			 <  / View >
			 < View style = { {
					flex: 1,
					width: 50,
				}
			}
			/>
									        <View style={styles.buttonContainer}>
									          <Button
									            onPress={this._onPressButton_exit}
									            title="离开小店"
									          / >
			 <  / View >
			 < View style = { {
					flex: 1,
					width: 50
				}
			}
			/>
									      </View >
			 < View style = { {
					flex: 1
				}
			}
			/>
									      </View >
			 <  / ImageBackground > );
	}
}

const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#F5FCFF',
		},
		welcome: {
			fontSize: 20,
			textAlign: 'center',
			margin: 10,
		},
		instructions: {
			textAlign: 'center',
			color: '#333333',
			marginBottom: 5,
		},
	});

const AppNavigator = createStackNavigator({
		Home: {
			screen: HomeScreen,
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

const AppContainer = createAppContainer(AppNavigator);
//export default createAppContainer(AppNavigator);
export default class App extends React.Component {
	render() {
		return  < AppContainer /  > ;
	}
}
