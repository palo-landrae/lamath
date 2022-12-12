import { Box, Flex, Text, HStack } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Links = [
  { id: 0, title: 'Home', path: '/' },
  { id: 1, title: 'Caesar Cipher', path: '/caesar_cipher' },
];

const NavLink = props => <Link to={props.path}>{props.children}</Link>;

export default function Nav() {
  return (
    <>
      <Box bg="#69979E" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Text fontWeight="bold" fontSize="xl">
                Lamath
              </Text>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLink key={link.id} path={link.path}>
                  {link.title}
                </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
