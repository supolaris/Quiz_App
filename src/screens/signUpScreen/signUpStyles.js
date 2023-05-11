import { StyleSheet } from "react-native";

export const SignUpStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    title: {
        fontSize: 20,

    },
    description: {
        fontSize: 16,

    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: '60%',

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