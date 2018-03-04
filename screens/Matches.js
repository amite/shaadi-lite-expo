import React from "react"
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  WebView,
  View
} from "react-native"
import { WebBrowser } from "expo"

import { MonoText } from "../components/StyledText"

export default class Matches extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: "https://my.shaadi.com/search" }}
          style={{ marginTop: 40 }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})
