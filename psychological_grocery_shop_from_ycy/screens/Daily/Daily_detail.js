import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    View,
    Text,
    StatusBar,
    WebView
} from "react-native";
import { pageIds } from '../InStore/InStoreConfig';

class DailyDetail extends Component {
    constructor(props) {
        super(props);
    }
    _onPressButton_back() {
        this.props.funcs.redirectTo(pageIds.daily);
    }

    componentWillMount() {
        // let { navigation } = this.props;
        // this.itemId = navigation.getParam("itemId");

        console.log(this.itemId);
    }

    render() {
        const { data } = this.props;
        return (
            <View style={styles.page}>
                <StatusBar
                    backgroundColor="#ff0000"
                    translucent={true}
                    hidden={true}
                    animated={true}
                />
                <Text style={styles.back} onPress={() => { this._onPressButton_back() }}>
                    返回日报列表
                </Text>
                <Text style={styles.title}>
                    {data.title}
                </Text>
                <WebView
                    style={styles.container}
                    originWhitelist={['*']}
                    source={{ uri: `http://129.211.141.160/#/pages/community/detail?id=${data.id}` }}
                />
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
    }
});

export default DailyDetail;
