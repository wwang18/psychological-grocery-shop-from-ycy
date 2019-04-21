import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Alert,
  View,
  ImageBackground,
  StatusBar,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { pageIds } from '../InStore/InStoreConfig';
import WawaText from '../../components/WawaText';
import { getArticleByPage } from '../../api/api';
import { saveStorage } from '../../services/mailBox';

import rowBg1 from "./../../img/daily/row1_2.png";
import rowBg2 from "./../../img/daily/row3_4.png";
import rowBg3 from "./../../img/daily/row5_7.png";

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1,
      pageItems: 7,
      pageTotal: 1,
      dataSource: []
    };
  }

  componentDidMount() {
    this._getData();
    saveStorage({key: 'boughtDaily', data: []});
  }
  _getData = (changeTo) => {
    let { pageNo, pageItems } = this.state;
    if (changeTo) {
      pageNo = pageNo + changeTo;
    }
    // get by api to set data
    getArticleByPage(pageNo, pageItems).then((response) => {
      this.setState({
        pageNo,
        pageTotal: response.pages,
        dataSource: response.rows.map(x => { x.row = response.rows.indexOf(x) + 1; return x; })
      });
    });
  }
  _pageChange = (changeTo) => {
    this._getData(changeTo);
  }
  _getDate = (date) => {
    date = new Date(date);
    // return date && date.getMonth() + 1 + "/" + date.getDate()
    // As mock data,return day by count some days
    return date && date.getMonth() + 1 + "/" + (date.getDate() - ((this.state.pageNo - 1) * 7))
  }
  _onPressButton_back() {
    this.props.funcs.redirectTo(pageIds.storeMain);
  }
  _handleButtonClick = item => {
    const { redirectTo, getState, modState } = this.props.funcs;

    Storage.load({
      key: 'boughtDaily',
    }).then(res => {
      let boughtDaily = res ? res : [];
      let hasBought = boughtDaily.indexOf(item.id) > -1;

      if (hasBought) {
        redirectTo(pageIds.dailyDetail, false, { type: pageIds.dailyDetail, data: item });
      }
      else {
        const { coins } = getState();
        if (coins >= 10) {
          Alert.alert(
            '',
            '每份日报售价10元，并会增加超越好感度10点',
            [
              { text: 'Cancel', style: 'cancel' },
              {
                text: 'OK', onPress: () => {
                  modState(10, -10);
                  Storage.save({
                    key: 'boughtDaily',
                    data: [...boughtDaily,item.id]
                  })
                  redirectTo(pageIds.dailyDetail, false, { type: pageIds.dailyDetail, data: item });
                }
              },
            ],
          )

        } else {
          Alert.alert('你没有足够的金币！');
        }
      }
    }).catch(err => {
      console.log(err , 'err')
    })
  };
  _renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: "column", margin: 0 }}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.row}
        source={item ? (item.row < 3 ? rowBg1 : (item.row > 4 ? rowBg3 : rowBg2)) : rowBg1}>
        <TouchableWithoutFeedback onPress={() => this._handleButtonClick(item)}>
          <View style={styles.rowText}>
            <View style={{ flex: 1140 }}>
              <WawaText style={styles.title}>{item.title}</WawaText>
            </View>
            <View style={{ flex: 140 }}>
              <WawaText style={styles.date}>{this._getDate(item.date)}</WawaText>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );

  render() {
    const { pageNo, pageTotal } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}
        />

        <ImageBackground
          resizeMode="stretch"
          style={styles.container}
          source={require("./../../img/daily/daily_background.png")}
        >
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 150 }}>
              <Image
                style={styles.header}
                resizeMode="contain"
                source={require("./../../img/daily/title_Daily.png")}
              />
            </View>
            <View style={{ flex: 30 }} />
            <View style={{ flex: 490 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 250 }}>
                  {pageNo != 1 && <TouchableOpacity style={{ flex: 1 }} onPress={() => this._pageChange(-1)}><Image
                    style={styles.leftBtn}
                    resizeMode="contain"
                    source={require("./../../img/daily/arrow_left.png")}
                  /></TouchableOpacity>}
                </View>
                <View style={{ flex: 830, justifyContent: "center" }}>
                  <FlatList
                    data={this.state.dataSource.slice(0, 7)}
                    renderItem={this._renderItem}
                    initialNumToRender={9}
                    //Setting the number of column
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
                <View style={{ flex: 250 }}>
                  {pageNo != pageTotal && <TouchableOpacity style={{ flex: 1 }} onPress={() => this._pageChange(1)}><Image
                    style={styles.rightBtn}
                    resizeMode="contain"
                    source={require("./../../img/daily/arrow_right.png")}
                  /></TouchableOpacity>}
                </View>
              </View>
            </View>
            <View style={{ flex: 80 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1210 }} />
                <View style={{ flex: 124 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_back()}
                  >
                    <Image
                      style={styles.button}
                      resizeMode="contain"
                      source={require("../../img/PQS/back.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 0
  },
  MainContainer: {
    justifyContent: "center",
    flex: 300
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    marginLeft: 180,
    height: "60%",
    width: "60%"
  },
  leftBtn: {
    justifyContent: "center",
    flex: 300,
    height: "50%",
    width: "50%",
    left: 60,
  },
  rightBtn: {
    justifyContent: "center",
    flex: 300,
    height: "50%",
    width: "50%",
    left: 0,
  },
  row: {
    flex: 1,
  },
  rowText: {
    flex: 1,
    flexDirection: "row",
    height: 36,
  },
  title: {
    left: 10,
    top: 10,
    fontSize: 14
  },
  date: {
    right: 0,
    top: 10,
    fontSize: 14
  },
  button: {
    width: null,
    height: null,
    flex: 1
  }
});

export default Daily;
