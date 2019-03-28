import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  AppRegistry,
  Button,
  StatusBar,
  Alert,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";

class PagePersonCard_p extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {}
    };
  }

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(36)).map((v, i) => {
      return { id: i, src: "http://placehold.it/200x200?text=" + (i + 1) };
    });
    that.setState({
      dataSource: items
    });
  }

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(36)).map((v, i) => {
      return { id: i, src: "http://placehold.it/200x200?text=" + (i + 1) };
    });
    that.setState({
      dataSource: items
    });
  }

  render() {
    return (
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require("./../img/P.png")}
      >
        <View style={{ flex: 70 }} />
        <View style={styles.MainContainer}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
                <Image
                  style={styles.imageThumbnail}
                  source={{ uri: item.src }}
                />
              </View>
            )}
            //Setting the number of column
            numColumns={6}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ImageBackground>
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
  }
});

export default PagePersonCard_p;
