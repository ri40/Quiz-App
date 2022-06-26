import { Box, Button, ButtonGroup, Text, VStack, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // ===============
  const handleSelect = i => {
    if (selected === i && selected === correct) return 'select';
    else if (selected === i && selected !== correct) return 'wrong';
    else if (i === correct) return 'select';
  };

  const handleCheck = i => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate('/result');
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError('Please select an option first');
  };
  //الرجوع للتاكد من الكود
  const handleQuit = () => {};

  function Feature({ desc, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Text mt={4}>{desc}</Text>
      </Box>
    );}
  return (
    <>
      <VStack>
        <Box>
          <Text>Question {currQues + 1} :</Text>
        </Box>
      </VStack>

      <VStack>
      <Box>{error && <ErrorMessage>{error}</ErrorMessage>}</Box>
        {/* Questions */}
        <Box height={['160px','110px']}>
          <Stack spacing={8} direction="row">
            <Feature desc={questions[currQues].question} />
          </Stack>
        </Box>
{/*  */}
        <Box>
          {options &&
            options.map((i) => (
          <ButtonGroup gap="4">
              <Button
              onClick={() => handleCheck(i)}
              disabled={selected}
              key={i}
              className={`singleOption ${selected && handleSelect(i)}`}
              >{i}</Button>
          </ButtonGroup>
            ))}
            </Box>
            <Box>
        <ButtonGroup gap="2">
        <Button onClick={handleQuit} variant="contained" color="secondary"><Link to="/">Quit</Link></Button>
        <Button onClick={handleNext} variant="contained" color="primary"> {currQues > 20 ? 'Submit' : 'Next Question'}</Button>
        </ButtonGroup>
        </Box>
      </VStack>
    </>
  );
};
export default Question;
