import React, { useState} from "react";
import {View, Text, TouchableOpacity, Image, TextInput, SafeAreaView} from "react-native";
import { SignInStyles } from "./signInStyles";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";


export default function SignInScreen() {

    const navigation = useNavigation();
    const [userName, setUserName] = useState();
    const [useremail, setUserEmail] = useState();
    const [userPassword, serUserPassword] = useState();

    const onRegisterPressed = () => {
        navigation.navigate('SignUp')
    }


    const onLoginPressed = () => {
        navigation.navigate('Quiz')
    }



    return(
        <SafeAreaView
        style={SignInStyles.container}
        >
            {/* <Text
            style={SignUpStyles.title}
            >Create an account</Text> */}
            {/* <Text
            style={SignUpStyles.description}
            >Sign up now and unlock access!</Text> */}
            <Image
            style={SignInStyles.image}
            source={require('../../../assets/images/Mobile-login.png')}
            />
                <View
                 style={{flexDirection: 'row', paddingVertical: 10}}
                >
                    <Entypo
                    style={SignInStyles.icon} 
                    name="email"
                    size={25}
                    color="#666"/>    
                    <TextInput 
                    style={SignInStyles.input}
                    placeholder="Enter your email"
                    onChangeText={(value) =>  setUserEmail(value)}
                    />
                </View>
                <View
                style={{flexDirection: 'row', paddingVertical: 10}}
                >
                    <Feather 
                    style={SignInStyles.icon}
                    name="lock"
                    size={25}
                    color="#666"/>
                    <TextInput 
                    style={SignInStyles.input}
                    placeholder="Enter your password"
                    onChangeText={(value) => serUserPassword(value)}
                    />
            </View>
            <TouchableOpacity
            onPress={onLoginPressed}
            style={SignInStyles.button}
            >
                <Text
                style={SignInStyles.buttonText}
                >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={onRegisterPressed}
            style={SignInStyles.button}
            >
                <Text
                style={SignInStyles.buttonText}
                >Sign up</Text>
            </TouchableOpacity>   
 
        </SafeAreaView>
    )
}