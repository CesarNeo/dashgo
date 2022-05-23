import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Cesar Emmanuel</Text>
        <Text color="gray.300" fontSize="small">
          cesar.emmanuel.167@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Cesar Emmanuel"
        src="https://github.com/cesarneo.png"
      />
    </Flex>
  )
}
