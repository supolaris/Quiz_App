import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StartUpScreen from "../../screens/startUpScreen/startUp";
import QuizScreen from "../../screens/quizScreen/Quiz";
import SignUpScreen from "../../screens/signUpScreen/signUp";
import SignInScreen from "../../screens/signInScreen/signIn";
import SettingScreen from "../../screens/settiingScreen/setting";
import HomeScreen from "../../screens/homeScreen/home";

export default function StackNav () {

    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen 
                options={{
                    headerShown: false
                }}
                name="StartUp"
                component={StartUpScreen}
                />

                <Stack.Screen 
                options={{
                    title:"Sign Up",
                }}
                name="SignUp"
                component={SignUpScreen}
                />  


                <Stack.Screen 
                options={{
                    title:"Sign In"
                }}
                name="SignIn"
                component={SignInScreen}
                />

                <Stack.Screen 
                name="Quiz"
                component={QuizScreen}
                />

                <Stack.Screen 
                options={{
                    headerShown: false
                }}        
                name="Setting"
                 component={SettingScreen}
                />    





                <Stack.Screen 
                options={{
                    title:"Home"
                }}
                name="Home"
                component={HomeScreen}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}