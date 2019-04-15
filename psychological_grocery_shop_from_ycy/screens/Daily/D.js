import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
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

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{"id":10056,"title":"超越在美丽的四川稻城亚丁录制《哈哈农夫》","date":"2019-04-14T04:49:36.000Z",row:1},
      {"id":10057,"title":"恭喜杨超越获得第三名！","date":"2019-04-13T05:34:09.000Z",row:2},
      {"id":10058,"title":"谢谢你的善良，善良是可以保护自己的武器","date":"2019-04-12T05:39:55.000Z",row:3},
      {"id":10059,"title":"超越正式成为AHC 全球品牌代言人！","date":"2019-04-11T05:44:44.000Z",row:4},
      {"id":10060,"title":"超越蛰伏了一周终于又发微博了！","date":"2019-04-10T05:45:46.000Z",row:5},
      {"id":10061,"title":"越越又发视频了，戴上墨镜你就是全村最靓的仔","date":"2019-04-09T05:46:06.000Z",row:6},
      {"id":10062,"title":"超越不在的日子是不是很想她，养超越吧！","date":"2019-04-08T05:46:42.000Z",row:7}]
    };
  }

  componentWillMount() {
    // get by api to set data
    // that.setState({
    //   dataSource: first_card
    // });
  }
  _getDate = (date) => {
    date = new Date(date);
    return date && date.getMonth() + 1 + "/" + date.getDate()
  }
  _onPressButton_back() {
    this.props.funcs.redirectTo(pageIds.storeMain);
  }
  _handleButtonClick = item => {
    this.props.funcs.redirectTo(pageIds.dailyDetail, false, { type: pageIds.dailyDetail, data: item });
  };
  _renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: "column", margin: 0 }}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.row}
        source={require("./../../img/daily/row1_2.png")}>
        <TouchableWithoutFeedback onPress={() => this._handleButtonClick(item)}>
          <View style={styles.rowText}>
            <View style={{ flex: 1160 }}>
              <WawaText style={styles.title}>{item.title}</WawaText>
            </View>
            <View style={{ flex: 120 }}>
              <WawaText style={styles.date}>{this._getDate(item.date)}</WawaText>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );

  render() {
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
                  <Image
                    style={styles.leftBtn}
                    resizeMode="contain"
                    source={require("./../../img/daily/arrow_left.png")}
                  />
                </View>
                <View style={{ flex: 830, justifyContent: "center" }}>
                  <FlatList
                    data={this.state.dataSource.slice(0, 7)}
                    renderItem={this._renderItem}
                    initialNumToRender={9}
                    //Setting the number of column
                    numColumns={1}
                    keyExtractor={(item, index) => index}
                  />
                </View>
                <View style={{ flex: 250 }}>
                  <Image
                    style={styles.rightBtn}
                    resizeMode="contain"
                    source={require("./../../img/daily/arrow_right.png")}
                  />
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
    top: 12
  },
  date: {
    right: 0,
    top: 12
  },
  button: {
    width: null,
    height: null,
    flex: 1
  }
});

export default Daily;
