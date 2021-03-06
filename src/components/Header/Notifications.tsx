import { Button, HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Notifications() {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Button variant="unstyled" type="button">
        <Icon as={RiNotificationLine} fontSize="20" />
      </Button>

      <Button variant="unstyled" type="button">
        <Icon as={RiUserAddLine} fontSize="20" />
      </Button>
    </HStack>
  )
}
