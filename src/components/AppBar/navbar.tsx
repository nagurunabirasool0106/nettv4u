import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import CustomDropdown from '../Custom/customDropDown'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'

//Accordian component imports
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { pages } from '../../constants/navbarPages'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const style = {
  width: '100%',
  maxWidth: 360,
}

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  //Accordian onchange
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      if (panel == 'Home') return
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ height: '38.5px' }}>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: {
                xs: 'block',
                md: 'none',
                maxHeight: 400,
                mb: 40,
              },
            }}
            disableScrollLock={true}
          >
            {pages.map((page, index) => (
              <MenuItem key={index} sx={{ padding: '2px 8px' }}>
                <Accordion
                  expanded={expanded === `${page.pageTitle}`}
                  onChange={handleChange(`${page.pageTitle}`)}
                  sx={{ width: '95%' }}
                >
                  <AccordionSummary
                    expandIcon={
                      page.pageTitle == 'Home' ? '' : <ExpandMoreIcon />
                    }
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography textAlign="center" fontWeight={600}>
                      {page.pageTitle}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: '0px' }}>
                    {page?.menuItems.map((item, index) => (
                      <List sx={style} component="nav" key={index}>
                        <ListItem divider>
                          <ListItemText primary={item} />
                        </ListItem>
                      </List>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </MenuItem>
            ))}
          </Menu>
        </Box>
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
            {pages.map((page, index) => {
              if (page.pageTitle === 'News') {
                return (
                  <CustomDropdown
                    key={index}
                    buttonText="News"
                    menuItems={page.menuItems}
                  />
                )
              } else if (page.pageTitle === 'Photo Gallery') {
                return (
                  <CustomDropdown
                    key={index}
                    buttonText="Photo Gallery"
                    menuItems={page.menuItems}
                  />
                )
              } else if (page.pageTitle === 'Play') {
                return (
                  <CustomDropdown
                    key={index}
                    buttonText="Play"
                    menuItems={page.menuItems}
                  />
                )
              } else if (page.pageTitle === 'Reviews') {
                return (
                  <CustomDropdown
                    key={index}
                    buttonText="Reviews"
                    menuItems={page.menuItems}
                  />
                )
              } else if (page.pageTitle === 'Videos') {
                return (
                  <CustomDropdown
                    key={index}
                    buttonText="Videos"
                    menuItems={page.menuItems}
                  />
                )
              } else if (page.pageTitle === 'Articles') {
                return (
                  <CustomDropdown
                    key={index}
                    buttonText="Articles"
                    menuItems={page.menuItems}
                  />
                )
              } else if (page.pageTitle === 'Celebrity') {
                return (
                  <CustomDropdown
                    key={index}
                    buttonText="Celebrity"
                    menuItems={page.menuItems}
                  />
                )
              } else if (page.pageTitle === 'Tv Serials & Shows') {
                return (
                  <CustomDropdown
                    key={index}
                    buttonText="Tv Serials & Shows"
                    menuItems={page.menuItems}
                  />
                )
              } else if (page.pageTitle === 'More') {
                return (
                  <CustomDropdown
                    key={index}
                    buttonText="More"
                    menuItems={page.menuItems}
                  />
                )
              }
              {
                return (
                  <Button
                    key={index}
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
                    {page.pageTitle}
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
