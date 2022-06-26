import { Text, VStack, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name]);

  return (
    <VStack h="40vh">
      <Box h="100px">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Final Score : {score}
        </Text>
      </Box>
      <Box
        as="button"
        p={4}
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500, green.500)"
        _hover={{
          bgGradient: 'linear(to-r, red.500, yellow.500)',
        }}
      >
        <Link to="/">Back to Home</Link>
      </Box>
    </VStack>
  );
};

export default Result;
