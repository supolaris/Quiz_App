import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native';
import React, {useState} from 'react';
import { COLORS, SIZES } from '../../components/theme';
import { data } from '../../../assets/data/QuizData';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const QuizScreen = () => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisable] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [progress, setProgress] = useState(new Animated.Value(0));

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

    {/* validate answer */}
    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisable(true);
        if(selectedOption == correct_option) {
            //set score
            setScore(score+1);
        }
        //show next button
        setShowNextButton(true);
    }


    const renderOptions = () => {
        return(
          <View>
            {
              allQuestions[currentQuestionIndex]?.options.map(option => (

                <TouchableOpacity
                onPress={() => validateAnswer(option)}
                disable={isOptionsDisabled}
                key={option}
                style={{
                  height: 60,
                  borderWidth: 2,

                  borderColor: option == correctOption ?
                  COLORS.border
                  : option == currentOptionSelected ?
                  COLORS.error
                  : COLORS.border+'70',

                  borderRadius: 20,
                  backgroundColor: option == correctOption ?
                  COLORS.success
                  : option == currentOptionSelected ?
                  COLORS.error
                  : COLORS.secondary,
                  
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

                  {/* show check or cross icon based on correct answer */}
                  {
                    option==correctOption ? (
                        <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 30, 
                            height: 30,
                            borderRadius: 30/2,
                            backgroundColor: COLORS.success,
                        }}
                        >
                            <MaterialCommunityIcons name="check"
                            style={{
                                color: COLORS.white,
                                fontSize: 20
                            }}
                            />

                        </View>

                    ): option == currentOptionSelected ? (
                        <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 30, 
                            height: 30,
                            borderRadius: 30/2,
                            backgroundColor: COLORS.error,
                        }}
                        >
                            <MaterialCommunityIcons name="close"
                            style={{
                                color: COLORS.white,
                                fontSize: 20
                            }}
                            />

                        </View>

                    ): null

                  }
                </TouchableOpacity>
                
                ))
            }
          </View>
        )
    
      }

      const handleNext = () => {
        if(currentQuestionIndex == allQuestions.length-1){
            //last question
            // show score modal
            setShowScoreModal(true);
        }else {
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisable(false);
            setShowNextButton(false);
        }
        Animated.timing(progress,{
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
      }

      const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity
                onPress={handleNext}
                style={{margin: 20,
                    padding: 10,
                    backgroundColor: COLORS.accent,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: COLORS.gray
                }}
                >
                    <Text
                    style={{fontSize: 20, textAlign: 'center', color: COLORS.white}}
                    >Next</Text>
                </TouchableOpacity>
            )
        }else {
            return null;
        }
        
      }

      const retryQuiz = () => {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisable(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
  

      }

      const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
      })

      const renderProgressBar = () => {
        return (
            <View
            style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: COLORS.gray,
                marginVertical: 40
            }}
            >
                <Animated.View
                style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: "#FFC3A0"
                }, {
                    width: progressAnim
                }]}
                >

                </Animated.View>

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
            backgroundColor={COLORS.gray}
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
            {renderProgressBar()}

            {/* question */}
            {renderQuestion()}

            {/* options */}

            {renderOptions()}

            {/* next button */}
            {renderNextButton()}

            {/* score modal */}
            <Modal
            animationType='slidie'
            transparent= {true}
            visible={showScoreModal}
            >
                <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.primmary,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    <View
                    style={{
                        backgroundColor: COLORS.white,
                        width: '90%',
                        borderRadius: 20,
                        padding: 20,
                        alignItems: 'center'
                    }}
                    >
                        <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                        >{score>(allQuestions.length/2) ? 'Congratulations!' : 'Opps!'}</Text>
                        <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: 20
                        }}
                        >
                            <Text
                            style={{
                                fontSize: 20,
                                color: score> (allQuestions.length/2)? COLORS.score : COLORS.error

                            }}
                            >{score}</Text>
                            <Text
                            style={{
                                fontSize: 20,
                                color: COLORS.black
                            }}
                            >/{allQuestions.length}</Text>
                            

                        </View>
                        <TouchableOpacity
                        onPress={retryQuiz}
                        style={{
                            backgroundColor: COLORS.accent, padding: 10, width: '60%', borderRadius: 10, alignItems: 'center'
                        }}
                        >
                             <Text
                             style={{
                                fontSize: 18, color: COLORS.white
                             }}
                             >Retry Quiz</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </Modal>
            
            

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