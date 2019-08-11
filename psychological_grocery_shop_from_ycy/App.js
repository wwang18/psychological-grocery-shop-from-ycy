import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
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
import PageReturnedMailCard_s from "./screens/PageReturnedMailCard_s";
import PageReturnedMailCard_o from "./screens/PageReturnedMailCard_o";
import PageCharacterCard_o1 from "./screens/PageCharacterCard_o1";
import PageGiftCard_o2 from "./screens/PageGiftCard_o2";
import PageBackPage_o3 from "./screens/PageBackPage_o3";
import PageStoredLetter_o4 from "./screens/PageStoredLetter_o4";
import instoreRoutes from "./screens/InStore/InStoreRouter";
import PageTeamIntro from "./screens/PageTeamIntro";
import PageExitPage_e from "./screens/PageExitPage_e";
import M11 from "./screens/CatchMouse2/M11";
import InStoreView from "./screens/InStore/InStoreView";

import Storage from "react-native-storage";
import AsyncStorage from '@react-native-community/async-storage';
import dva from "./utils/dva";
import NavigationService from "./utils/navigationService";
import mailBox from "./models/mailBox"; // 邮箱模块数据

const storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 5000,
  // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
  // 如果不指定则数据只会保存在内存中，重启后即丢失
  storageBackend: AsyncStorage,

  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  defaultExpires: null,

  // 读写时在内存中缓存数据。默认启用。
  enableCache: true
  // sync: require('你可以另外写一个文件专门处理sync')
});
global.Storage = storage;

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
    },
    ReturnedMailCard_s: {
      screen: PageReturnedMailCard_s,
      navigationOptions: {
        header: null
      }
    },
    ReturnedMailCard_o: {
      screen: PageReturnedMailCard_o,
      navigationOptions: {
        header: null
      }
    },
    CharacterCard_o1: {
      screen: PageCharacterCard_o1,
      navigationOptions: {
        header: null
      }
    },
    GiftCard_o2: {
      screen: PageGiftCard_o2,
      navigationOptions: {
        header: null
      }
    },
    BackPage_o3: {
      screen: PageBackPage_o3,
      navigationOptions: {
        header: null
      }
    },
    StoredLetter_o4: {
      screen: PageStoredLetter_o4,
      navigationOptions: {
        header: null
      }
    },
    ExitPage_e: {
      screen: PageExitPage_e,
      navigationOptions: {
        header: null
      }
    },
    TeamIntro: {
      screen: PageTeamIntro,
      navigationOptions: {
        header: null
      }
    },
    M11: { // 测试用
      screen: M11,
      navigationOptions: {
        header: null
      }
    },
    InStoreView: { // 测试用
      screen: InStoreView,
      navigationOptions: {
        header: null
      }
    },
    ...instoreRoutes
  },
  {
    initialRouteName: "InStoreView"
  }
);

const Router = createAppContainer(AppNavigator); //所有路由

const app = dva({
  models: [mailBox], // 各个模块数据list
  onError(e) {
    if (__DEV__) console.log("onError", e);
  }
});
const AppContainer = app.start(
  <Router
    ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
  />
);

export default class App extends Component {
  componentWillMount() {
    Orientation.lockToLandscape();
  }

  render() {
    return <AppContainer />;
  }
}
