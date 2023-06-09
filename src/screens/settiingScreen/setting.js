import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { settingStyles } from './settingStyles'
import Usericona from 'react-native-vector-icons/AntDesign'
import Headphoneicona from 'react-native-vector-icons/Feather'
import Settingicona from "react-native-vector-icons/AntDesign"
import Hearto from "react-native-vector-icons/AntDesign"
import Message1 from "react-native-vector-icons/AntDesign"
import Book from "react-native-vector-icons/AntDesign"
import People from "react-native-vector-icons/Ionicons"


const SettingScreen = () => {



  return (
    <View
    style={settingStyles.Container}
    >
      <View
      style={settingStyles.imageView}
      >
        <Image 
        resizeMode='contain'
        style={settingStyles.userImage}
        source={require("../../../assets/images/profile.png")}
        
        />
        <View
        style={{paddingLeft: 15}}
        >
          <Text
          style={{fontWeight: 'bold', fontSize: 18}}
          >Polaris</Text>
          <Text
          style={{fontSize: 14}}
          >RN Developer</Text>
        </View>

      </View>

      
      <View
      style={{padding: 0}}
      >
        <TouchableOpacity
        style={{flexDirection: 'row', paddingBottom: 5, borderBottomWidth: 0.5, marginVertical: 20  }}
        >
          <Usericona 
          name='user'
          size={20}
          />
          <Text
          style={settingStyles.touchtext}
          >Person Data</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={{flexDirection: 'row', paddingBottom: 5, borderBottomWidth: 0.5, marginVertical: 20 }}
        >
          <Settingicona 
          name='setting'
          size={20}
          />
          <Text
          style={settingStyles.touchtext}
          >Settings</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={{flexDirection: 'row', paddingBottom: 5, borderBottomWidth: 0.5, marginVertical: 20 }}
        >
          <Hearto 
          name='hearto'
          size={20}
          />
          <Text
          style={settingStyles.touchtext}
          >Refferal code</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={{flexDirection: 'row', paddingBottom: 5, borderBottomWidth: 0.5, marginVertical: 20 }}
        >
          <Message1 
          name='message1'
          size={20}
          />
          <Text
          style={settingStyles.touchtext}
          >FAQs</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={{flexDirection: 'row', paddingBottom: 5, borderBottomWidth: 0.5, marginVertical: 20 }}
        >
          <Book 
          name='book'
          size={20}
          />
          <Text
          style={settingStyles.touchtext}
          >Our handbook</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={{flexDirection: 'row', paddingBottom: 5, borderBottomWidth: 0.5, marginVertical: 20 }}
        >
          <People 
          name='people'
          size={20}
          />
          <Text
          style={settingStyles.touchtext}
          >Community</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={{
        flexDirection: 'row',
        paddingBottom: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 20
       }}
        >
          <Headphoneicona 
          name='headphones'
          size={20}
          />
          <Text
          style={settingStyles.endText}
          >Feel free to ask. We ready to help</Text>

        </TouchableOpacity>

      </View>
    </View>
  )
}

export default SettingScreen;