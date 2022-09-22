import { Text, Box, Flex } from '@chakra-ui/react'


export function Layout({ children }: { children: React.ReactNode }) {
    return <Box h='calc(100vh)' w='100%' bg='blue.600' >{children}</Box>
  }