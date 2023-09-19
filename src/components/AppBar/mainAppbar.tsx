import * as React from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import ClickAwayListener from '@mui/material/ClickAwayListener'
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

import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'

//Speed dial imports
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import ShareIcon from '@mui/icons-material/Share'

const pages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam']

function AppBarMain() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const [language, setLanguage] = useState('')

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null)
  // }

  // const handleChange = (event: SelectChangeEvent) => {
  //   setLanguage(event.target.value as string)
  // }

  //For Speed dial
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const actions = [
    {
      icon: <FbIcon />,
      name: 'Facebook',
      bgColor: '#1877f2',
      textColor: '#00008B',
    },
    {
      icon: <TwitterIcon />,
      name: 'Twitter',
      bgColor: '#1877f2',
      textColor: '#48a1ff',
    },
    {
      icon: <InstagramIcon />,
      name: 'Instagram',
      bgColor: '#1877f2',
      textColor: '#fd1d1d',
    },
    {
      icon: <YoutubeIcon />,
      name: 'Youtube',
      bgColor: '#1877f2',
      textColor: '#c4302b',
    },
    {
      icon: <PinInterestIcon />,
      name: 'Piniterest',
      bgColor: '#1877f2',
      textColor: '#e60023',
    },
  ]

  const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }))

  return (
    <AppBar position="sticky" sx={{ height: { xs: '72px', md: '80px' } }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: { xs: '72px', md: '80px' } }}>
          <Tooltip title="Homepage">
            <Box
              sx={{
                margin: { xs: '4px 4px', md: '0px 0px 0px 32px' },
                width: { xs: '98px', md: '164px' },
              }}
            >
              <img
                src={`${'images/nettv4u.png'}?w=164&h=164&fit=crop&auto=format`}
                alt={'Nettvu Logo'}
                loading="lazy"
              />
            </Box>
          </Tooltip>
          <Box
            role="presentation"
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '16ch', height: '5ch' },
              backgroundColor: 'whitesmoke',
              display: { xs: 'block', md: 'none' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-select-currency"
              select
              label="Language"
              defaultValue=""
              variant="filled"
              SelectProps={{
                MenuProps: {
                  disableScrollLock: true, // Prevent unwanted styles on the body
                },
              }}
              InputProps={{
                disableUnderline: true, // Remove the underline
              }}
              // sx={{ fontSize: '14px', minWidth: '16ch' }}
            >
              {pages.map((lang) => (
                <MenuItem key={lang} value={lang}>
                  {lang}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box
            sx={{
              position: 'relative',
              height: 68,
              mb: 3,
              display: { xs: 'block', md: 'none' },
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <StyledSpeedDial
                ariaLabel="SpeedDial"
                icon={<ShareIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction="down"
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    sx={{
                      backgroundColor: action.bgColor,
                      color: action.textColor,
                    }}
                  />
                ))}
              </StyledSpeedDial>
            </ClickAwayListener>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginLeft: '250px',
            }}
          >
            {pages.map((page) => (
              <Tooltip title={`Select ${page}`} key={page}>
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
