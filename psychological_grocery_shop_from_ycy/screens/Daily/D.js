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

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{ "id": 10064, "title": "超越在厦门拍戏的一天", "image_url": "test", "date": "2019-04-03T16:00:00.000Z", "type": 1001 }, { "id": 10055, "title": "《羽你同行》路透视频", "image_url": "https://img3.doubanio.com/view/group_topic/l/public/p165709296.webp", "date": "2019-04-03T01:27:43.000Z", "type": 1002 }, { "id": 10054, "title": "戴草帽的超越好像幼儿园小朋友", "image_url": "https://img3.doubanio.com/view/group_topic/l/public/p165709296.webp", "date": "2019-04-03T01:26:45.000Z", "type": 1002 }, { "id": 10053, "title": "《羽你同行》探班视频，赶紧预约起来", "image_url": "https://img3.doubanio.com/view/group_topic/l/public/p165709296.webp", "date": "2019-04-03T01:25:32.000Z", "type": 1001 }, { "id": 10052, "title": "【杨超越】锦鲤和她粉丝的真面目（下集）", "image_url": "https://img3.doubanio.com/view/group_topic/l/public/p165709296.webp", "date": "2019-04-02T01:23:54.000Z", "type": 1003 }, { "id": 10051, "title": "哈哈农夫——杨超越养成记上线了", "image_url": "https://img3.doubanio.com/view/group_topic/l/public/p165709296.webp", "date": "2019-04-02T01:19:03.000Z", "type": 1001 }, { "id": 10048, "title": "杨超越超甜美现场live版101个愿望", "image_url": "https://img3.doubanio.com/view/group_topic/l/public/p165709296.webp", "date": "2019-03-31T16:00:00.000Z", "type": 1001 }, { "id": 10049, "title": "超越在将夜2中扮演的昊天一角", "image_url": "https://img3.doubanio.com/view/group_topic/l/public/p165709296.webp", "date": "2019-03-31T16:00:00.000Z", "type": 1001 }, { "id": 10050, "title": "超越101个愿望广州演唱会直拍", "image_url": "https://img3.doubanio.com/view/group_topic/l/public/p165709296.webp", "date": "2019-03-31T16:00:00.000Z", "type": 1002 }, { "id": 10047, "title": "flower演唱会各类资源汇总", "image_url": "https://img3.doubanio.com/view/group_topic/l/public/p165709296.webp", "date": "2019-03-31T11:20:02.000Z", "type": 1002 }, { "id": 10046, "title": "今日超越抵达厦门", "image_url": "https://img3.doubanio.com/view/group_topic/l/public/p165709296.webp", "date": "2019-03-31T11:18:44.000Z", "type": 1001 }]
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
    return date && date.getMonth()+1 +"/" + date.getDate() + "/" + date.getFullYear()
  }
  _onPressButton_back() {
    this.props.funcs.redirectTo(pageIds.storeMain);
  }
  _handleButtonClick = item => {
    this.props.funcs.redirectTo(pageIds.dailyDetail, false, { type: pageIds.dailyDetail, data: item });
  };
  _renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: "column", margin: 10 }}>
      <TouchableWithoutFeedback onPress={() => this._handleButtonClick(item)}>
        <Text>
          {item.title}&nbsp;&nbsp;{this._getDate(item.date)}
        </Text>
      </TouchableWithoutFeedback>
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
          source={require("./../../img/PQS/PQS_background.png")}
        >
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 150 }}>
              <Image
                style={styles.header}
                resizeMode="contain"
                source={require("./../../img/PQS/title_GiftCard.png")}
              />
            </View>
            <View style={{ flex: 30 }} />
            <View style={{ flex: 490 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 250 }} />
                <View style={{ flex: 830, justifyContent: "center" }}>
                  <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                    initialNumToRender={9}
                    //Setting the number of column
                    numColumns={1}
                    keyExtractor={(item, index) => index}
                  />
                </View>
                <View style={{ flex: 250 }} />
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
    height: "100%",
    width: "100%"
  },
  button: {
    width: null,
    height: null,
    flex: 1
  }
});

export default Daily;
