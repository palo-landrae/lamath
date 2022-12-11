import React, { useState } from 'react';
import {
  Heading,
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
  HStack,
  Radio,
  RadioGroup,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  VStack,
} from '@chakra-ui/react';

const Decoder = () => {
  const [plaintext, setPlaintext] = useState('');
  const [shift, setShift] = useState(1);
  const [direction, setDirection] = useState('right');
  const [cipher, setCipher] = useState('');

  const submit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/caesar_cipher/decrypt', {
      method: 'POST',
      body: JSON.stringify({
        cipher: cipher,
        shift: shift,
        direction: direction,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await res.text();
    setPlaintext(result);
  };
  return (
    <VStack bg="white" py={4} borderBottomRadius="lg">
      <form onSubmit={e => submit(e)}>
        <Box w="md">
          <FormControl>
            <FormLabel htmlFor="plaintext">
              <Text fontSize="md">Cipher</Text>
            </FormLabel>
            <Input
              id="plaintext"
              placeholder="Enter cipher"
              value={cipher}
              onChange={e => setCipher(e.target.value)}
              bg="gray.200"
              color="black"
            />
          </FormControl>
          <FormControl my={2}>
            <FormLabel htmlFor="shift">
              <Text fontSize="md">Shift/Key (Number)</Text>
            </FormLabel>
            <NumberInput
              value={shift}
              onChange={value => setShift(value)}
              id="shift"
              max={26}
              min={1}
              color="black"
            >
              <NumberInputField bg="gray.200" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <RadioGroup value={direction} onChange={value => setDirection(value)}>
            <HStack spacing="24px">
              <Radio value="left" bg="gray.200">
                Left
              </Radio>
              <Radio value="right" bg="gray.200">
                Right
              </Radio>
            </HStack>
          </RadioGroup>
          <Button
            mt={4}
            w="md"
            colorScheme="red"
            type="submit"
            fontWeight="semibold"
          >
            DECRYPT
          </Button>
        </Box>
      </form>
      {plaintext ? (
        <Box py={2} px={4} rounded="lg">
          <Heading>{plaintext}</Heading>
        </Box>
      ) : (
        <Box py={2}>
          <Heading color="white">-</Heading>
        </Box>
      )}
    </VStack>
  );
};

export default Decoder;
