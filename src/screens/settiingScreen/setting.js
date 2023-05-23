import React from "react";
import {Text, View, SafeAreaView, ScrollView} from "react-native";
import { settingStyles } from "./settingStyles";


const section = [
  {
    header: 'preferences',
    items: [
      {id: 'language', icon: 'globe', labe: 'language', type: 'select'},
      {id: 'dardmode', icon: 'moon', labe: 'dark-mode', type: 'toogle'},
      {id: 'wifi', icon: 'wifi', labe: 'Use Wi-Fi', type: 'toogle'},
    ]
  },
  {
    header: 'help',
    items: [
      {id: 'bug', icon: 'flag', labe: 'report bug', type: 'link'},
      {id: 'contant', icon: 'main', labe: 'contact us', type: 'link'},
    ]
  },
  {
    header: 'content',
    items: [
      {id: 'save', icon: 'save', labe: 'saved', type: 'link'},
      {id: 'dowbload', icon: 'dowbload', labe: 'downloads', type: 'link'},
    ]
  },

]

export default function SettingScreen() {
  return(
    <SafeAreaView
    style={settingStyles.container}
    >
    <ScrollView>
      <View>Setting</View>
    </ScrollView>
    </SafeAreaView>
  )

}