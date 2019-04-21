import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    View,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    Image,
} from "react-native";
import { pageIds } from '../InStore/InStoreConfig';
import { getArticleById } from '../../api/api';
import { WebView } from "react-native-webview";

class DailyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
        };
    }
    _onPressButton_back() {
        this.props.funcs.redirectTo(pageIds.daily);
    }

    componentDidMount() {
        this._getData();
    }

    _getData() {
        const { data } = this.props;
        // get by api to set data
        getArticleById(data.id).then((response) => {
            this.setState({
                content: response.content
            });
        });
    }

    render() {
        const { content } = this.state;
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
                    source={require("./../../img/daily/dailyDetail_background.png")}
                >
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <View style={{ flex: 30 }} />
                        <View style={{ flex: 490 }}>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <WebView
                                    style={styles.webview}
                                    originWhitelist={['*']}
                                    source={{html: content}}
                                />
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
    page: {
        flex: 1,
        marginTop: 60,
        marginLeft: 30,
        marginRight: 30
    },
    back: {
        position: 'absolute',
        left: 30,
    },
    title: {
        position: 'absolute',
        left: 200,
    },
    container: {
        flex: 1,
        marginTop: 30,
        paddingTop: Platform.OS === "ios" ? 60 : 0
    },
    webview: {
        marginTop: 50,
        marginLeft: 60,
        marginRight: 60,
        backgroundColor: "transparent",
        // fontWeight: 'normal',
        // fontFamily: 'DFPWaWaW5-GB'
    },
    button: {
        width: null,
        height: null,
        flex: 1,
        marginTop: -10,
        marginLeft: -30
    }
});

export default DailyDetail;
