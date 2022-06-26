import { useEffect, useState } from 'react';
import { Box, CircularProgress, Text, VStack } from '@chakra-ui/react';
import Question from '../components/Question';
const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);
  const handleShuffle = options => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <VStack>
      <Box>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome, {name}
        </Text>
      </Box>
      {/*  */}
      {questions ? (
        <>
          <VStack>
            <Box className="quizInfo">
              {/*  */}
              <Text
                bgGradient="linear(to-l, #28ca28, #caca28)"
                bgClip="text"
                fontSize="1xl"
                fontWeight="extrabold">{questions[currQues].category}</Text>
              {/*  */}
              
              <Text
                bgGradient="linear(to-l, #ca7928, #79ca28)"
                bgClip="text"
                fontSize="1xl"
                fontWeight="extrabold"> Score : {score}
              </Text>
            </Box>

          </VStack>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={3}
        />
      )}
    </VStack>
  );
};
export default Quiz;
