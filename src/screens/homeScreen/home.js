import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { homeStyles } from "./homeStyles";


export default function HomeScreen() {

    const navigation = useNavigation();
    const onButtonPress = () => {
        navigation.navigate('Quiz')
    }

    return(
        <View
        style={homeStyles.container}
        >
            <View
            style={{alignItems: 'center'}}
            >
            <Text
            style={homeStyles.title}
            >Quiz</Text>

            <TouchableOpacity
            onPress={onButtonPress}
            style={homeStyles.button}
            >
                <Text
                style={homeStyles.buttonText}
                >Start Now</Text>
            </TouchableOpacity> 

            </View>
            <View
            style={{alignItems: 'center'}}
            >
            <Image
            style={homeStyles.image}
            source={require('../../../assets/images/quizcover.png')}
            />
 

            </View>
   
        </View>
    )
}