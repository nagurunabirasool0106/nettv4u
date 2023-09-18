import { api } from '~/utils/api'
import AppBarMain from '../components/mainAppbar'
import Navbar from '../components/navbar'
import Spacer from '../components/spacer'
import { Box } from '@mui/material'

export default function Home() {
  //TODO: Implement TRPC Later
  // const hello = api.example.hello.useQuery({ text: 'from tRPC' })
  return (
    <>
      <AppBarMain />
      <Spacer />
      <Box sx={{ margin: 'auto', width: '80%' }}>
        <Navbar />
      </Box>
    </>
  )
}
