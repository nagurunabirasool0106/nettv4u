import { api } from '~/utils/api'
import AppBarMain from '../components/AppBar/mainAppbar'
import Navbar from '../components/AppBar/navbar'
import Spacer from '../components/Utils/spacer'
import { Box } from '@mui/material'

import TrendingHot from '../components/TrendingHot/trendingHot'
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
      <Box sx={{ margin: 'auto', width: '80%' }}>
        <TrendingHot />
      </Box>
    </>
  )
}
