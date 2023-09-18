import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import CustomDropdown from './customDropDown'

const pages = [
  'Home',
  'News',
  'Photo Gallery',
  'Play',
  'Reviews',
  'Videos',
  'Articles',
  'Celebrity',
  'Tv Serials & Shows',
  'More',
]

function Navbar() {
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
      <Container maxWidth="xl" sx={{ height: '38.5px' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            button: {
              flex: 'none',
              padding: '6px 6px',
            },
          }}
        >
          <Stack direction="row" spacing={1} sx={{ height: '38.5px' }}>
            {pages.map((page) => {
              if (page === 'News') {
                return (
                  <CustomDropdown
                    key={page}
                    buttonText="News"
                    menuItems={[
                      'Tamil',
                      'English',
                      'Malayalam',
                      'Telugu',
                      'Hindi',
                      'Kannada',
                    ]}
                  />
                )
              } else if (page === 'Photo Gallery') {
                return (
                  <CustomDropdown
                    key={page}
                    buttonText="Photo Gallery"
                    menuItems={[
                      'Actors Gallery',
                      'Actress Gallery',
                      ' Movie Gallery',
                      'Events Gallery',
                    ]}
                  />
                )
              } else if (page === 'Play') {
                return (
                  <CustomDropdown
                    key={page}
                    buttonText="Play"
                    menuItems={[
                      'Poll',
                      'Play Dhanush Quiz',
                      'Play Worldcup Quiz',
                      'Play Avengers Quiz',
                      'Play IPL Quiz',
                      'Play NGK Movie Quiz',
                    ]}
                  />
                )
              } else if (page === 'Reviews') {
                return (
                  <CustomDropdown
                    key={page}
                    buttonText="Reviews"
                    menuItems={['Movies Reviews', 'Coming Soon']}
                  />
                )
              } else if (page === 'Videos') {
                return (
                  <CustomDropdown
                    key={page}
                    buttonText="Videos"
                    menuItems={[
                      'Latest Movie Trailers',
                      'Interviews',
                      'Movie Review Videos',
                      'Anchor Cuts',
                      'Sillaakki Dumma Videos',
                      'Nettv4u Videos',
                      'Shortfilms',
                    ]}
                  />
                )
              } else if (page === 'Articles') {
                return (
                  <CustomDropdown
                    key={page}
                    buttonText="Articles"
                    menuItems={[
                      'Slideshows',
                      'Tamil Articles',
                      'English Articles',
                      'Malayalam Articles',
                      'Telugu Articles',
                      'Hindi Articles',
                      'Kannada Articles',
                    ]}
                  />
                )
              } else if (page === 'Celebrity') {
                return (
                  <CustomDropdown
                    key={page}
                    buttonText="Celebrity"
                    menuItems={[
                      'Celebrity birthday',
                      'Actors',
                      'Actress',
                      'Directors',
                      'Producers',
                      'Supporting Actors',
                      'Supporting Actress',
                      'Editors',
                      'Others',
                    ]}
                  />
                )
              } else if (page === 'Tv Serials & Shows') {
                return (
                  <CustomDropdown
                    key={page}
                    buttonText="Tv Serials & Shows"
                    menuItems={[
                      'Tv Channels',
                      'Tv Shows',
                      'Tv Serials',
                      'Awards',
                      'Serials Actors',
                      'Serials Actress',
                    ]}
                  />
                )
              } else if (page === 'More') {
                return (
                  <CustomDropdown
                    key={page}
                    buttonText="More"
                    menuItems={[
                      'About Us',
                      'Contact Us',
                      'Careers',
                      'Team',
                      'Celebs Profile Submission',
                      'Make Your Profile',
                    ]}
                  />
                )
              }
              {
                return (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      height: '38.5px',
                      margin: '0px',
                    }}
                    size="small"
                  >
                    {page}
                  </Button>
                )
              }
            })}
          </Stack>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Navbar
