import { StyleSheet } from "react-native";
import { COLORS } from "../../components/theme";

export const settingStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
    },
    header: {
        paddingHorizontal: 20,
        marginBottom: 10,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,

    },
    subtitle: {
        fontSize: 20,
        fontWeight: '500'
    },
    section: {

    },
    headerSection: {

    },
    headertext: {

    },
    image: {
        width: 60,
        height: 60,
        padding: 0
    }
})