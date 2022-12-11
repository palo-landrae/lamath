import { Box, Button, Center, Text, HStack, Heading } from '@chakra-ui/react';
import { useState } from 'react';

const Shift = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [shiftedAlphabet, setShiftedAlphabet] = useState(alphabet);
  const [count, setCount] = useState(0);

  const shift_to_right = () => {
    const temp = shiftedAlphabet.split('');
    temp.push(temp.shift());
    setCount(v => v + 1);
    setShiftedAlphabet(temp.join(''));
  };

  const shift_to_left = () => {
    const temp = shiftedAlphabet.split('');
    temp.unshift(temp.pop());
    setCount(v => v - 1);
    setShiftedAlphabet(temp.join(''));
  };

  return (
    <Box bgColor="white" borderBottomRadius="lg" py={6}>
      <Center>
        <Text
          letterSpacing="widest"
          fontWeight="bold"
          fontSize="2xl"
          lineHeight={6}
        >
          {alphabet}
        </Text>
      </Center>
      <Center>
        <Text
          letterSpacing="widest"
          fontWeight="bold"
          fontSize="2xl"
          lineHeight={6}
        >
          {shiftedAlphabet}
        </Text>
      </Center>
      <Center mt={4}>
        <HStack>
          <Button onClick={shift_to_left} px={5} bgColor="blue.400">
            LEFT
          </Button>
          <Heading w={32} px={6} textAlign="center">
            {count}
          </Heading>
          <Button onClick={shift_to_right} px={4} bgColor="red.400">
            RIGHT
          </Button>
        </HStack>
      </Center>
    </Box>
    /*
    <VStack spacing={2}>
      {alphabet.split('').map(c => {
        return (
          <Text px={2} fontSize="md" fontWeight="bold" border="1px">
            {c}
          </Text>
        );
      })}
    </VStack>*/
  );
};

export default Shift;
