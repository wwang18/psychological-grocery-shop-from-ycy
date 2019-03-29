import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Orientation from "react-native-orientation";
import Home from "./screens/Home";
import PageWriteLetter from "./screens/PageWriteLetter";
import SubTopic from "./screens/SubTopic";
import LetterPaper from "./screens/LetterPaper";
import PageMailBox_i from './screens/PageMailBox_i';
import PageMailToChaoYue_j from './screens/PageMailToChaoYue_j';
import InStore from './screens/InStore';
import F11 from './screens/CatchMouse/F11';
import F12 from './screens/CatchMouse/F12';
import F13 from './screens/CatchMouse/F13';
import F14 from './screens/CatchMouse/F14';
import F15 from './screens/CatchMouse/F15';
import F16 from './screens/CatchMouse/F16';
import F17 from './screens/CatchMouse/F17';
import F18 from './screens/CatchMouse/F18';
import M1 from './screens/CatchMouse/M1';
import M2 from './screens/CatchMouse/M2';

const AppNavigator = createStackNavigator(
  {
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
    SubTopic: {
      screen: SubTopic,
      navigationOptions: {
        header: null
      }
    },
    LetterPaper: {
      screen: LetterPaper,
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
    MailToChaoYue_j: {
      screen: PageMailToChaoYue_j,
      navigationOptions: {
        header: null
      }
    },
    InStore: {
      screen: InStore,
      navigationOptions: {
        header: null
      }
    },
    F11: {
      screen: F11,
      navigationOptions: {
        header: null
      }
    },
    F12: {
      screen: F12,
      navigationOptions: {
        header: null
      }
    },
    F13: {
      screen: F13,
      navigationOptions: {
        header: null
      }
    },
    F14: {
      screen: F14,
      navigationOptions: {
        header: null
      }
    },
    F15: {
      screen: F15,
      navigationOptions: {
        header: null
      }
    },
    F16: {
      screen: F16,
      navigationOptions: {
        header: null
      }
    },
    F17: {
      screen: F17,
      navigationOptions: {
        header: null
      }
    },
    F18: {
      screen: F18,
      navigationOptions: {
        header: null
      }
    },
    M1: {
      screen: M1,
      navigationOptions: {
        header: null
      }
    },
    M2: {
      screen: M2,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  componentWillMount() {
    Orientation.lockToLandscape();
  }

  render() {
    return <AppContainer />;
  }
}
