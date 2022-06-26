import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
// ++++++++++++++++++++++++++++++++++++++++++++++++//
function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  // ===================================================//
    const fetchQuestions = async (category = '', difficulty = '') => {
      const request = await fetch(
        `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
      const data = await request.json();
      setQuestions(data.results);
    };
  // -----------------------------------------------------//
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }
            />
            <Route
              path="/quiz"
              element={
                <Quiz
                  name={name}
                  questions={questions}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                />
              }
            />
            <Route
              path="/result"
              element={<Result name={name} score={score} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
