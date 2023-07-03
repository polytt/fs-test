import { Box, Heading, Stack, Center } from '@chakra-ui/react'
import { useUser } from './UserProvider'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToken } from './useToken'

export function Dashboard() {
  const { user, loading } = useUser()
  const navigate = useNavigate()
  const [token, tokenLoading] = useToken()

  useEffect(() => {
    if (loading) return
    if (!user) navigate('/')
  }, [loading, navigate, user])
  return (
    <Box>
      <Heading>Dashboard</Heading>
      <Box p={5}>
        <Stack spacing={8}>
          <Heading size="md">Welcome {user?.account}</Heading>

          <Center>
            <Stack border='1px solid' borderColor='whiteAlpha.700' p={4} maxW='10em'>
              <Heading size="md">Your Token</Heading>
              <Heading size='2xl'>{token}</Heading>
            </Stack>
          </Center>
        </Stack>
      </Box>
    </Box>
  )
}