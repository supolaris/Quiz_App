import { StyleSheet } from "react-native";
import { COLORS } from "../../components/theme";

export const settingStyles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: COLORS.backgroundColor
    },
    imageView: {
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        marginBottom: 20,
        paddingBottom: 40,
        paddingTop: 40,
        paddingLeft: 30

    },
    userImage: {
        height: 40,
        width: 40

    },
    touchtext: {
        fontSize: 16,
        paddingLeft: 10

    },
    icon: {
        
    },
    endText: {
        fontSize: 16,
        paddingLeft: 10,
        textAlign: 'center'
    }
})