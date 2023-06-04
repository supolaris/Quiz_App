import { StyleSheet } from "react-native";
import { COLORS } from "../../components/theme";

export const settingStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
    },
    header: {
        paddingHorizontal: 30,
        marginBottom: 10,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,

    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500'
    },
    section: {
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    headerSection: {
        paddingVertical: 5,
        paddingHorizontal: 25


    },
    headertext: {
        fontSize: 18,
        textTransform: 'uppercase',
        letterSpacing: 1.2


    },
    image: {
        width: 60,
        height: 60,
        padding: 0
    },
    labeltext: {

    },
    label: {
        paddingLeft: 24, 
        borderTopWidth: 0.5,
        //borderColor: '#e3e3e3',
        backgroundColor: ''

    },
})