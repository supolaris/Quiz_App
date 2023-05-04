import { Dimensions } from "react-native";
const { height, width}  = Dimensions.get('window');


const COLORS = {
    primmary: "#252c4a",
    secondary: "#1e90ff",
    accent: "#3498db",
    success: "#00c891",
    error: "#ff4444",
    black: "#000000",
    white: "#ffffff",
    background: "#252c4a",
}


const SIZES = {
    base: 10,
    height, 
    width,
}

export {
    COLORS, SIZES
}