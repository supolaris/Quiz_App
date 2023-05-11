import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import { startUpStyles } from "./startUpStyles";
import { useNavigation } from "@react-navigation/native";


export default function StartUpScreen() {

    const navigation = useNavigation();
    const onButtonPress = () => {
        navigation.navigate('Quiz')
    }

    return(
        <View
        style={startUpStyles.container}
        >
            <Image
            style={startUpStyles.image}
            source={require('../../../assets/images/quizStartup.png')}
            />

            <Text
            style={startUpStyles.title}
            >ThinkFast</Text>
            <TouchableOpacity
            onPress={onButtonPress}
            style={startUpStyles.button}
            >
                <Text
                style={startUpStyles.buttonText}
                >Get Started</Text>
            </TouchableOpacity>   
        </View>
    )
}