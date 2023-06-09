import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD9C2',
       // alignItems: 'center',
       // flexDirection: 'column-reverse',
        justifyContent: 'space-evenly',
        paddingHorizontal: 15
        
    },
    image: {
        width: 300,
        height: 280

    },
    title: {
        fontSize: 30,
        padding: 2,
        borderBottomWidth: 1,
        
    },
    descripton: {
        textAlign: 'center',
        fontSize: 18,
        paddingVertical: 10
    },
    button: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#36454F',
        padding: 10,
        borderRadius: 10,
        width: '50%',
        backgroundColor: '#FFC3A0'

    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',

    }
})