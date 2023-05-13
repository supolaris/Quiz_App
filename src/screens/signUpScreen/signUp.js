import React, { useState} from "react";
import {View, Text, TouchableOpacity, Image, TextInput, SafeAreaView} from "react-native";
import { SignUpStyles } from "./signUpStyles";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import auth from '@react-native-firebase/auth'; 


export default function SignUpScreen() {

    const navigation = useNavigation();
    const [userName, setUserName] = useState();
    const [useremail, setUserEmail] = useState('');
    const [userPassword, serUserPassword] = useState('');




    const onRegisterPressed = () => {
        auth()
        .createUserWithEmailAndPassword(useremail, userPassword)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
    }

    const signOut = () => {
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }


    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }


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
            source={require('../../../assets/images/s.png')}
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
            onPress={onRegisterPressed}
            style={SignUpStyles.button}
            >
                <Text
                style={SignUpStyles.buttonText}
                >Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={onSignInPressed}
            style={SignUpStyles.button}
            >
                <Text
                style={SignUpStyles.buttonText}
                >Sign in</Text>
            </TouchableOpacity>   
 
        </SafeAreaView>
    )
}