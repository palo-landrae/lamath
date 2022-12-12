import React, { useState } from 'react';
import {
  Heading,
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
  Checkbox,
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
  const [cipher, setCipher] = useState('');
  const [isProgressive, setIsProgressive] = useState(false);
  const [step, setStep] = useState(1);

  const submit = async e => {
    e.preventDefault();
    const res = await fetch(
      'https://lamath-flask-backend.vercel.app/api/caesar_cipher/decrypt',
      {
        method: 'POST',
        body: JSON.stringify({
          cipher: cipher,
          shift: shift,
          isProgressive: isProgressive,
          step: step,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
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
          <Checkbox
            value={isProgressive}
            onChange={v => setIsProgressive(v.target.checked)}
          >
            Progressive
          </Checkbox>
          {isProgressive && (
            <FormControl my={2}>
              <FormLabel htmlFor="step">
                <Text fontSize="sm">Steps (Number)</Text>
              </FormLabel>
              <NumberInput
                value={step}
                onChange={v => setStep(v)}
                id="step"
                min={1}
                color="black"
                size="sm"
              >
                <NumberInputField bg="gray.200" fontSize="md" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          )}
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
