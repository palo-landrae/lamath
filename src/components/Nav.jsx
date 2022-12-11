import {
  Box,
  Flex,
  Text,
  HStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const Links = [
  { id: 0, title: 'Home', path: '/' },
  { id: 1, title: 'Caesar Cipher', path: '/caesar_cipher' },
];

const NavLink = props => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={props.path}
  >
    {props.children}
  </Link>
);

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
