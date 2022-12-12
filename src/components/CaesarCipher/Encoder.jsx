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
  Checkbox,
} from '@chakra-ui/react';

const Encoder = () => {
  const [plaintext, setPlaintext] = useState('');
  const [shift, setShift] = useState(1);
  const [cypher, setCypher] = useState('');
  const [isProgressive, setIsProgressive] = useState(false);
  const [step, setStep] = useState(1);

  const submit = async e => {
    e.preventDefault();
    const res = await fetch(
      'https://lamath-flask-backend.vercel.app/api/caesar_cipher/encrypt',
      {
        method: 'POST',
        body: JSON.stringify({
          plaintext: plaintext,
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
    setCypher(result);
  };
  return (
    <VStack bg="white" py={4} borderBottomRadius="lg">
      <form onSubmit={e => submit(e)}>
        <Box w="md">
          <FormControl>
            <FormLabel htmlFor="plaintext">
              <Text fontSize="md">Plaintext</Text>
            </FormLabel>
            <Input
              id="plaintext"
              placeholder="Enter plaintext"
              value={plaintext}
              onChange={e => setPlaintext(e.target.value)}
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
              size="sm"
            >
              <NumberInputField bg="gray.200" fontSize="md" />
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
            ENCRYPT
          </Button>
        </Box>
      </form>
      {cypher ? (
        <Box py={2} px={4} rounded="lg">
          <Heading>{cypher}</Heading>
        </Box>
      ) : (
        <Box py={2}>
          <Heading color="white">-</Heading>
        </Box>
      )}
    </VStack>
  );
};

export default Encoder;
