import { Dimensions } from "react-native";
const { height, width}  = Dimensions.get('window');


const COLORS = {
    primmary: "#FFD9C2",
    secondary: "#FFC3A0",
    accent: "#FFC3A0",
    success: "#00c891",
    error: "#ff4444",
    black: "#000000",
    white: "#36454F",
    background: "#252c4a",
    gray: "#252c4a",
    border: "#36454F",
    backgroundColor: '#FFD9C2',
}


const SIZES = {
    base: 10,
    height, 
    width,
}

export {
    COLORS, SIZES
}