import { StyleSheet } from "react-native";

export const startUpStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD9C2',
        alignItems: 'center'
        
    },
    image: {
        width: 450,
        height: 400

    },
    title: {
        fontSize: 30,
        padding: 2,
        borderBottomWidth: 1,
        
    },
    button: {
        marginTop: 10,
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
        fontWeight: '500'

    }
})