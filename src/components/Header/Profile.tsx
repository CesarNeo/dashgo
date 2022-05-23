import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Cesar Emmanuel</Text>
          <Text color="gray.300" fontSize="small">
            cesar.emmanuel.167@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Cesar Emmanuel"
        src="https://github.com/cesarneo.png"
      />
    </Flex>
  )
}
