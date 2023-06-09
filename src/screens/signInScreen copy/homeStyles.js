import { StyleSheet } from "react-native";
import { COLORS } from "../../components/theme";


export const SignInStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.backgroundColor

    },
    title: {
        fontSize: 35,

    },
    description: {
        fontSize: 19,

    },
    image: {
        
        width: 350,
        height: 310

    },
    icon: {
        marginRight: 5,
        paddingTop: 10

    },
    input: {
        padding: 0,
        borderBottomWidth: 1,
        //borderRadius: 10,
        width: '70%',
        //margin: 10,
        

    },
    button: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#36454F',
        padding: 10,
        borderRadius: 10,
        width: '70%',
        backgroundColor: '#FFC3A0'

    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500'

    }
})