import { Box, Heading, Button, Stack } from '@chakra-ui/react'
import { useUser } from "./UserProvider"

export function Home() {
  const { user } = useUser()
  return (
    <Box>
      <Stack>
        <Heading>Claim your token!</Heading>
        <Heading as='h2' size='md' opacity={0.5}>Login with metamask to claim your token, the lower your token the better.</Heading>
      </Stack>
      <Box p={5}>
        {
          user ? (
            <Button>Go to dashboard</Button>
          ) : (
            <Button>Get Started</Button>
          )
        }
      </Box>
    </Box>
  )
}