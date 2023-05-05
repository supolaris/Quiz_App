import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import React, {useState} from 'react';
import { COLORS, SIZES } from '../../components/theme';
import { data } from '../../../assets/data/QuizData';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const QuizScreen = () => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const renderQuestion = () => {
        return(
            <View
            >
                {/* Question number render */}
                <View
                style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginTop: 20,
                }}
                >
                <Text
                style={{
                    fontSize: 20,
                    color: COLORS.white,
                    opacity: 0.6,
                    marginRight: 2
                }}
                >
                    {currentQuestionIndex+1}</Text>
                <Text
                style={{
                    fontSize: 18,
                    color: COLORS.white,
                    opacity: 0.6
                }}
                >
                    {allQuestions.length}</Text>

                </View>


                {/* Question */}
                <View>
                    <Text
                    style={{
                        fontSize: 25,
                        color: COLORS.white,
                        marginTop: 5,
                    }}
                    >
                        {allQuestions[currentQuestionIndex]?.question}</Text>
                </View>
                

            </View>
            
        )
    }
    const renderOption = () => {
        return (
            <View></View>
        )
    }



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
            {renderQuestion()}
            

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