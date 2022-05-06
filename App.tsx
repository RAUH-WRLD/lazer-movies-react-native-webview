import React from "react";
import {WebView} from "react-native-webview";
import * as ScreenOrientation from "expo-screen-orientation";
export default class App extends React.Component {
    componentDidMount() {
        ScreenOrientation.unlockAsync();
    }
    render() {
        return <WebView source={{uri: "https://lazermoviesreactnativewebviewapp.netlify.app/"}} startInLoadingState={true} javaScriptEnabled={true} domStorageEnabled={true} />;
    }
}
