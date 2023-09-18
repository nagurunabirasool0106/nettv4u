import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import FbIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YoutubeIcon from '@mui/icons-material/YouTube'
import PinInterestIcon from '@mui/icons-material/Pinterest'

const pages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam']

function AppBarMain() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title="Homepage">
            <img
              style={{ marginLeft: '32px' }}
              src={`${'images/nettv4u.png'}?w=164&h=164&fit=crop&auto=format`}
              alt={'Nettvu Logo'}
              loading="lazy"
            />
          </Tooltip>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginLeft: '250px',
            }}
          >
            {pages.map((page) => (
              <Tooltip title={`Select ${page}`}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    borderRight: '0.1px solid white',
                    borderRadius: '0px',
                  }}
                >
                  {page}
                </Button>
              </Tooltip>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginLeft: '250px',
            }}
          >
            <FbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <TwitterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <YoutubeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <PinInterestIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <InstagramIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default AppBarMain