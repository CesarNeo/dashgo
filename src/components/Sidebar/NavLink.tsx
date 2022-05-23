import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'
import { ElementType } from 'react'
import { icons } from 'react-icons'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
}

export function NavLink({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignContent="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
