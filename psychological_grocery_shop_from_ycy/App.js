import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Orientation from "react-native-orientation";
import Home from "./screens/Home";
import SubTopic from "./screens/SubTopic";
import LetterPaper from "./screens/LetterPaper";
import PageMailBox_i from "./screens/PageMailBox_i";
import PageMailToChaoYue_j from "./screens/PageMailToChaoYue_j";
import PageGiftCardView_q from "./screens/PageGiftCardView_q";
import PageGiftCard_q from "./screens/PageGiftCard_q";
import PageMailBox_n from "./screens/PageMailBox_n";
import PagePersonCard_p from "./screens/PagePersonCard_p";
import PagePersonCardView_p from "./screens/PagePersonCardView_p";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
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
    GiftCardView_q: {
      screen: PageGiftCardView_q,
      navigationOptions: {
        header: null
      }
    },
    GiftCard_q: {
      screen: PageGiftCard_q,
      navigationOptions: {
        header: null
      }
    },
    MailBox_n: {
      screen: PageMailBox_n,
      navigationOptions: {
        header: null
      }
    },
    PersonCard_p: {
      screen: PagePersonCard_p,
      navigationOptions: {
        header: null
      }
    },
    PersonCardView_p: {
      screen: PagePersonCardView_p,
      navigationOptions: {
        header: null
      }
    }
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
