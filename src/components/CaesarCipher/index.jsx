import React from 'react';
import {
  Center,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Encoder from './Encoder';
import Decoder from './Decoder';
import Shift from './Shift';

const CaesarCipher = () => {
  return (
    <Center h="lg">
      <VStack my={4} bg="#69979E" rounded="lg">
        <Tabs isFitted variant="enclosed" w="lg">
          <TabList>
            <Tab
              fontSize="xl"
              fontWeight="semibold"
              color="white"
              _selected={{ color: 'black', bg: 'white' }}
            >
              Encode
            </Tab>
            <Tab
              fontSize="xl"
              fontWeight="semibold"
              color="white"
              _selected={{ color: 'black', bg: 'white' }}
            >
              Decode
            </Tab>
            <Tab
              fontSize="xl"
              fontWeight="semibold"
              color="white"
              _selected={{ color: 'black', bg: 'white' }}
            >
              Shift
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={0}>
              <Encoder />
            </TabPanel>
            <TabPanel p={0}>
              <Decoder />
            </TabPanel>
            <TabPanel p={0}>
              <Shift />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Center>
  );
};

export default CaesarCipher;
