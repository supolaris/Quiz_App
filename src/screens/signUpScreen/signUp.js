import React, { useState} from "react";
import {View, Text, TouchableOpacity, Image, TextInput, SafeAreaView} from "react-native";
import { SignUpStyles } from "./signUpStyles";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";


export default function SignUpScreen() {

    const navigation = useNavigation();
    const [userName, setUserName] = useState();
    const [useremail, setUserEmail] = useState();
    const [userPassword, serUserPassword] = useState();


    return(
        <SafeAreaView
        style={SignUpStyles.container}
        >
            <Text
            style={SignUpStyles.title}
            >Create an account</Text>
            <Text
            style={SignUpStyles.description}
            >Sign up now and unlock access!</Text>
            <TextInput 
            style={SignUpStyles.input}
            placeholder="Enter your name"
            onChangeText={(value) => setUserName(value)}
            />
            <TextInput 
            style={SignUpStyles.input}
            placeholder="Enter your email"
            onChangeText={(value) =>  setUserEmail(value)}
            />
            <TextInput 
            style={SignUpStyles.input}
            placeholder="Enter your password"
            onChangeText={(value) => serUserPassword(value)}
            />

            <TouchableOpacity

            style={SignUpStyles.button}
            >
                <Text
                style={SignUpStyles.buttonText}
                >Register</Text>
            </TouchableOpacity>   
        </SafeAreaView>
    )
}