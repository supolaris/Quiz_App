import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import { startUpStyles } from "./startUpStyles";
import { useNavigation } from "@react-navigation/native";


export default function StartUpScreen() {

    const navigation = useNavigation();
    const onButtonPress = () => {
        navigation.navigate('SignUp')
    }

    return(
        <View
        style={startUpStyles.container}
        >
            <View
            style={{alignItems: 'center'}}
            >
            <Text
            style={startUpStyles.title}
            >ThinkFast</Text>
            <Text
            style={startUpStyles.descripton}
            >We help to excel the Intelligence quotient with the help of multiple choice questions</Text>
                                 <TouchableOpacity
            onPress={onButtonPress}
            style={startUpStyles.button}
            >
                <Text
                style={startUpStyles.buttonText}
                >Get Started</Text>
            </TouchableOpacity> 
 
  

            </View>
            <View
            style={{alignItems: 'center'}}
            >
            <Image
            style={startUpStyles.image}
            source={require('../../../assets/images/quizStartup.png')}
            />
 

            </View>






  


   
        </View>
    )
}