import React, { useState} from "react";
import {View, Text, TouchableOpacity, Image, TextInput, SafeAreaView} from "react-native";
import { SignUpStyles } from "./signUpStyles";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";


export default function SignUpScreen() {

    const navigation = useNavigation();
    const [userName, setUserName] = useState();
    const [useremail, setUserEmail] = useState();
    const [userPassword, serUserPassword] = useState();


    return(
        <SafeAreaView
        style={SignUpStyles.container}
        >
            {/* <Text
            style={SignUpStyles.title}
            >Create an account</Text> */}
            {/* <Text
            style={SignUpStyles.description}
            >Sign up now and unlock access!</Text> */}
            <Image
            style={SignUpStyles.image}
            source={require('../../../assets/images/Mobile-login.png')}
            />
             <View
                style={{flexDirection: 'row', paddingVertical: 10}}
                >
                    <AntDesign 
                    style={SignUpStyles.icon}
                    name="user"
                    size={25}
                    color="#666"
                    />
                    <TextInput 
                    style={SignUpStyles.input}
                    placeholder="Enter your name"
                    onChangeText={(value) => setUserName(value)}
                    /> 

                </View>
                <View
                 style={{flexDirection: 'row', paddingVertical: 10}}
                >
                    <Entypo
                    style={SignUpStyles.icon} 
                    name="email"
                    size={25}
                    color="#666"/>    
                    <TextInput 
                    style={SignUpStyles.input}
                    placeholder="Enter your email"
                    onChangeText={(value) =>  setUserEmail(value)}
                    />
                </View>
                <View
                style={{flexDirection: 'row', paddingVertical: 10}}
                >
                    <Feather 
                    style={SignUpStyles.icon}
                    name="lock"
                    size={25}
                    color="#666"/>
                    <TextInput 
                    style={SignUpStyles.input}
                    placeholder="Enter your password"
                    onChangeText={(value) => serUserPassword(value)}
                    />
            </View>
            <TouchableOpacity
            style={SignUpStyles.button}
            >
                <Text
                style={SignUpStyles.buttonText}
                >Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={SignUpStyles.button}
            >
                <Text
                style={SignUpStyles.buttonText}
                >Sign in</Text>
            </TouchableOpacity>   
 
        </SafeAreaView>
    )
}