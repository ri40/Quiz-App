import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box
} from '@chakra-ui/react';
import React from 'react';

const ErrorMessage = ({ children }) => {
  return (
    <Box>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Please try again</AlertTitle>
        <AlertDescription>
          Field "must be filled" !
        </AlertDescription>
      </Alert>
      {children}
    </Box>
  );
};

export default ErrorMessage;
