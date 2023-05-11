import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StartUpScreen from "../../screens/startUpScreen/startUp";
import QuizScreen from "../../screens/quizScreen/Quiz";
import { StatusBar } from "react-native/types";

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
                
                name="Quiz"
                component={QuizScreen}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}