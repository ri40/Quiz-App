import React, { useState } from 'react';
import Pic from '../img/quiz.png';
import { useNavigate } from 'react-router-dom';
import Categories from '../Data/Categories';
import ErrorMessage from '../components/ErrorMessage';
import {
  ChakraProvider,
  Flex,
  HStack,
  theme,
  VStack,
  Text,
  Input,
  Button,
  Select,
  Image,
} from '@chakra-ui/react';
// ======================================================

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz');
    }
  };

  return (
    <div>
      <ChakraProvider theme={theme}>
        <HStack spacing="0">
          <Flex
            height="100vh"
            width="50%"
            backgroundColor="white"
            alignItems="center"
            justifyContent="center"
          >
            <VStack>
              {/* //==++++== */}
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold">
                Quiz
              </Text>
              {/* //==++++== */}
              {/* //handel errorr if not fiued */}
              {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
              <Input
                onChange={e => setName(e.target.value)}
                placeholder="Enter Your Name"
              ></Input>
              {/* //================select-com-3-part============================================== */}
              {/* select 1 for Category */}
              <Select
                placeholder="Select Category"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                {Categories.map(cat => (
                  <option key={cat.category} value={cat.value}>
                    {cat.category}
                  </option>
                ))}
              </Select>
              {/* select 2 for difficulty */}
              <Select
                placeholder="Select Difficulty"
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}
              >
                <option key="Easy" value="easy">
                  Easy
                </option>
                <option key="Medium" value="medium">
                  Medium
                </option>
                <option key="Hard" value="hard">
                  Hard
                </option>
              </Select>
              {/* //========================bnt-for-enter-the-Questions====================================== */}
              <Button onClick={handleSubmit} background="green" color="wheat">
                START QUIZ
              </Button>
            </VStack>
          </Flex>
          {/* الجانب الثاني من الصفحة فيه فقط صورة */}
          {/* //========================2end-siad====================================== */}
          <Flex
            height="100vh"
            width="50%"
            alignItems="center"
            justifyContent="center"
            bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
          >
            <Image src={Pic}></Image>
          </Flex>
        </HStack>
      </ChakraProvider>
    </div>
  );
};

export default Home;
