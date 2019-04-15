import React from "react";
import Video from "react-native-video";
import { StyleSheet, View, TouchableOpacity, Image, Alert } from "react-native";
import { scale } from "react-native-size-matters";

import { AnimatedWawaText } from "../../components/AnimatedWawaText";

import { pageIds } from "./InStoreConfig";
import Settings from "./Settings";

import Instore from "./InStoreMain";
import F11 from "../CatchMouse/F11";
import F12 from "../CatchMouse/F12";
import F13 from "../CatchMouse/F13";
import F14 from "../CatchMouse/F14";
import F15 from "../CatchMouse/F15";
import F16 from "../CatchMouse/F16";
import F17 from "../CatchMouse/F17";
import F18 from "../CatchMouse/F18";
import M1 from "../CatchMouse/M1";
import M2 from "../CatchMouse/M2";
import MinisMachine from "../MinisMachine/U";
import U1 from "../MinisMachine/U1";
import U2 from "../MinisMachine/U2";
import Phonograph from "../Phonograph/V";
import Daily from "../Daily/D";
import DailyDetail from "../Daily/Daily_detail";
import MailBox_i from "../PageMailBox_i.js";

// const backgroundMusic = require('../../audio/ThinkWild.mp3');

export class InStoreView extends React.Component {
  state = {
    love: 20,
    coins: 20,
    currentPage: pageIds.storeMain,
    showSettings: false,
    phonograph: {
      backgroundMusicFile: require("../../audio/ThinkWild.mp3")
    },
    settings: {
      backgroundMusic: true
    }
  };

  componentWillMount() {
    const funcs = {
      redirectTo: this.gotoNextPage,
      getState: this.getLoveAndCoins,
      modState: this.modLoveAndCoins,
      updatePhonograph:this.updatePhonograph,
      updateSettings:this.updateSettings
    };

    this.allPages = {
      [pageIds.storeMain]: <Instore funcs={funcs} />,
      [pageIds.F11]: <F11 funcs={funcs} />,
      [pageIds.F12]: <F12 funcs={funcs} />,
      [pageIds.F13]: <F13 funcs={funcs} />,
      [pageIds.F14]: <F14 funcs={funcs} />,
      [pageIds.F15]: <F15 funcs={funcs} />,
      [pageIds.F16]: <F16 funcs={funcs} />,
      [pageIds.F17]: <F17 funcs={funcs} />,
      [pageIds.F18]: <F18 funcs={funcs} />,
      [pageIds.M1]: <M1 funcs={funcs} />,
      [pageIds.M2]: <M2 funcs={funcs} />,
      [pageIds.minisMachine]: <MinisMachine funcs={funcs} />,
      [pageIds.U1]: <U1 funcs={funcs} />,
      [pageIds.U2]: <U2 funcs={funcs} />,
      [pageIds.phonograph]: <Phonograph funcs={funcs} />,
      [pageIds.daily]: <Daily funcs={funcs} />,
      [pageIds.dailyDetail]: (
        <DailyDetail funcs={funcs} data={{ id: 0, title: "" }} />
      ),
      [pageIds.mailBox]: <MailBox_i funcs={funcs} />
    };
  }

  toggleSettings = () => {
    this.setState({ showSettings: !this.state.showSettings });
  };

  updateSettings = newSettings => {
    this.setState({ settings: newSettings });
  };

  updatePhonograph = newSong => {
    this.setState({ phonograph: newPhonograph });
  };

  gotoNextPage = (pageId, useNavigation = false, item) => {
    if (useNavigation) {
      this.props.navigation.navigate(pageId);
    } else {
      if (item) {
        this.allPages[item.type] = (
          <DailyDetail
            funcs={{ redirectTo: this.gotoNextPage }}
            data={item.data}
          />
        );
      }
      this.setState({ currentPage: pageId });
    }
  };

  getLoveAndCoins = () => {
    return {
      love: this.state.love,
      coins: this.state.coins
    };
  };

  modLoveAndCoins = (love, coins) => {
    const newLove = this.state.love + love;
    const newCoins = this.state.coins + coins;
    this.setState({ love: newLove, coins: newCoins });
  };

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={this.state.phonograph.backgroundMusicFile}
          ref={ref => {
            this.player = ref;
          }}
          audioOnly={true}
          paused={!this.state.settings.backgroundMusic}
          rate={1}
          repeat={true}
        />
        {this.state.showSettings && (
          <View style={styles.settingsDialog}>
            <Settings
              settings={this.state.settings}
              updateSettings={this.updateSettings}
              toggle={this.toggleSettings}
            />
          </View>
        )}
        <View style={styles.gearButtonArea}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.toggleSettings}
            style={styles.button}
          >
            <Image
              style={styles.buttonBackgournd}
              source={require("../../img/instore/BtnSettings.png")}
            />
          </TouchableOpacity>
        </View>
        <AnimatedWawaText
          style={styles.heartButtonArea}
          backgroundImage={require("../../img/instore/Heart.png")}
          value={this.state.love}
        />
        <AnimatedWawaText
          style={styles.coinButtonArea}
          backgroundImage={require("../../img/instore/Coin.png")}
          value={this.state.coins}
        />
        {this.allPages[this.state.currentPage]}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  settingsDialog: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1000
  },
  button: {
    flex: 1
  },
  buttonBackgournd: {
    width: "100%",
    height: "100%"
  },
  numberContainer: {
    flex: 1,
    paddingStart: 45,
    paddingVertical: 15
  },
  numberDisplay: {
    fontSize: scale(14),
    color: "white"
  },
  gearButtonArea: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 71,
    height: 76,
    zIndex: 10000
  },
  heartButtonArea: {
    position: "absolute",
    right: 20,
    top: 2,
    width: 135,
    height: 45,
    zIndex: 10000
  },
  coinButtonArea: {
    position: "absolute",
    right: 20,
    top: 38,
    width: 135,
    height: 45,
    zIndex: 10000
  }
});

export default InStoreView;
