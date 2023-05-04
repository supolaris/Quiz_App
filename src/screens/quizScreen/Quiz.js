import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../components/theme';
import { data } from '../../../assets/data/QuizData';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const QuizScreen = () => {
  return (
    <SafeAreaView
    style={{
        flex: 1
    }}
    >
        <StatusBar
            barStyle='light-content'
            backgroundColor={COLORS.primmary}
            />
        <View
        style={{
            flex: 1,
            paddiingVertical: 40,
            paddingHorizontal: 10,
            backgroundColor: COLORS.primmary,
            position: 'relative',
        }}
        >

            {/* progress bar */}

            {/* question */}

            {/* options */}

            {/* next button */}

            {/* background image */}
            <Image 
            style={{
                width: SIZES.width,
                height: 130,
                zIndex: -1,
                bottom: 0,
                left: 0,
                right: 0,
                position: 'absolute',
            }}
            source={require('../../../assets/images/DottedBG.png')}
            />
            
            
        </View>
    </SafeAreaView>
  )
}

export default QuizScreen;