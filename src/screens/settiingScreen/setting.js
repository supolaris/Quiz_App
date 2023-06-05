import React from "react";
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import { settingStyles } from "./settingStyles";
import FeatherIcon from "react-native-vector-icons/Feather"


const section = [
  {
    header: 'preferences',
    items: [
      {id: 'language', icon: 'globe', label: 'language', type: 'select'},
      {id: 'dardmode', icon: 'moon', label: 'dark-mode', type: 'toogle'},
      {id: 'wifi', icon: 'wifi', label: 'Use Wi-Fi', type: 'toogle'},
    ]
  },
  {
    header: 'help',
    items: [
      {id: 'bug', icon: 'flag', label: 'report bug', type: 'link'},
      {id: 'contant', icon: 'main', label: 'contact us', type: 'link'},
    ]
  },
  {
    header: 'content',
    items: [
      {id: 'save', icon: 'save', label: 'saved', type: 'link'},
      {id: 'dowbload', icon: 'dowbload', label: 'downloads', type: 'link'},
    ]
  },

]

export default function SettingScreen() {
  return(
    <SafeAreaView
    style={settingStyles.container}
    >
    <ScrollView >
      <View
      style={settingStyles.header}
      >
        <Text
        style={settingStyles.title}
        >Settings</Text>
        <Text
        style={settingStyles.subtitle}
        >Update your preferences here</Text>
      </View>

      {section.map(({header, items}) => (
        <View
        style={settingStyles.section} key={header}
        >
          <View 
          style={settingStyles.headerSection}>
            <Text
            style={settingStyles.headertext}
            >{header}</Text>
          </View>

          <View
          style={settingStyles.labelsection}
          >
            {items.map(({label, id, type, icon}, index) => (
              <View
              style={[settingStyles.label,
                index == 0 && {borderTopWidth: 0}, ]} key={id}
              >
                <TouchableOpacity
                onPress={() => {
                  //onpress handle
                }}
                >
                  <View 
                  style={settingStyles.row}
                  >
                    <FeatherIcon 
                    name={icon}
                    color="white"
                    size={22}
                    style={{marginRight: 12}}
                    />
                  <Text
                  style={settingStyles.labeltext}
                  >{label}</Text>

                  </View>

                </TouchableOpacity>
              </View>
            ))}

          </View>

        </View>
      ))}



    </ScrollView>
    </SafeAreaView>
  )

}