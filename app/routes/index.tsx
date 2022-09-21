import { Text, Box, Flex } from '@chakra-ui/react'

export default function Index() {
  return (
    <Box display='flex' bg='tomato' h='calc(100vh)' p={4} alignItems='center' justifyContent='center'>
      <Text fontSize='2xl'>Chakra Is Working!</Text>
    </Box>
  );
}
