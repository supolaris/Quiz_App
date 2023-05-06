import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
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
    const renderOptions = () => {
        return(
          <View>
            {
              allQuestions[currentQuestionIndex]?.options.map(option => (
                <TouchableOpacity
                key={option}
                style={{
                  height: 60,
                  borderWidth: 2,
                  borderColor: COLORS.secondry+ '40',
                  borderRadius: 20,
                  backgroundColor: COLORS.secondry+'20',
                  paddingHorizontal: 20,
                  marginVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
    
                  
                }}
                >
                  <Text
                  style={{fontSize: 20, color: COLORS.white}}
                  >{option}</Text>
                </TouchableOpacity>
                
                ))
            }
          </View>
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
            {renderQuestion()}

            {/* options */}

            {renderOptions()}

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