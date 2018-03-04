import React from "react"
import { Platform } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { TabNavigator, TabBarBottom } from "react-navigation"

import Colors from "../constants/Colors"

import Matches from "../screens/Matches"
import LinksScreen from "../screens/LinksScreen"
import SettingsScreen from "../screens/SettingsScreen"

export default TabNavigator(
  {
    Matches: {
      screen: Matches
    },
    Links: {
      screen: LinksScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      /* eslint-disable react/display-name */
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case "Matches":
            iconName =
              Platform.OS === "ios"
                ? `ios-information-circle${focused ? "" : "-outline"}`
                : "md-information-circle"
            break
          case "Links":
            iconName =
              Platform.OS === "ios"
                ? `ios-link${focused ? "" : "-outline"}`
                : "md-link"
            break
          case "Settings":
            iconName =
              Platform.OS === "ios"
                ? `ios-options${focused ? "" : "-outline"}`
                : "md-options"
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }
      /* eslint-enable react/display-name */
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false
  }
)

TabNavigator.displayName = "TabBar"
