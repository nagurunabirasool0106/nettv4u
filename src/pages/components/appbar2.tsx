// import * as React from 'react'
// import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
// import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import Menu from '@mui/material/Menu'
// import MenuIcon from '@mui/icons-material/Menu'
// import Container from '@mui/material/Container'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import Tooltip from '@mui/material/Tooltip'
// import MenuItem from '@mui/material/MenuItem'
// import FbIcon from '@mui/icons-material/Facebook'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import InstagramIcon from '@mui/icons-material/Instagram'
// import YoutubeIcon from '@mui/icons-material/YouTube'
// import PinInterestIcon from '@mui/icons-material/Pinterest'
// // import Nettv4uLogo from '../../static/images/avatar/nettv4u.png';

// const pages = ['Home', 'News', 'Photo Gallery', 'Play', 'Reviews', 'Videos', 'Articles', 'Celebrity', 'Tv Serials & Shows', 'More']
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

// function ResponsiveAppBar2() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null
//   )

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget)
//   }
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget)
//   }

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null)
//   }

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null)
//   }

//   return (
//     <AppBar position="sticky">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <Tooltip title="Open settings">
//             <img
//               style={{ marginLeft: '32px' }}
//               src={`${'images/nettv4u.png'}?w=164&h=164&fit=crop&auto=format`}
//               alt={'Nettvu Logo'}
//               loading="lazy"
//             />
//           </Tooltip> */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: 'none', md: 'flex' },
//               marginLeft: '250px',
//             }}
//           >
//             {pages.map((page) => {
//               if(page == 'news'){
//                 return
//               }
//               return (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{
//                     my: 2,
//                     color: 'white',
//                     display: 'block',
//                   //   borderRight: '0.1px solid white',
//                   //   borderRadius: '0px',
//                   }}
//                 >
//                   {page}
//                 </Button>
//               )
//             })}
//           </Box>
          
//         </Toolbar>
//       </Container>
//     </AppBar>
//   )
// }
// export default ResponsiveAppBar2




import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import FbIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YoutubeIcon from '@mui/icons-material/YouTube'
import PinInterestIcon from '@mui/icons-material/Pinterest'
import Newsdropdown from './newsdropdown'
import Photogallerydropdown from './photogallerydropdown'
import Playdropdown from './playdropdown'
import Reviewsdropdown from './reviewsdropdown'
import Videosdropdown from './videosdropdown'
import Articlesdropdown from './articlesdropdown'
import Celebritydropdown from './celebritydropdown'
import Tvserialsdropdown from './tvserialsdropdown'
import Moredropdown from './moredropdowm'

const pages = ['Home', 'News', 'Photo Gallery', 'Play', 'Reviews', 'Videos', 'Articles', 'Celebrity', 'Tv Serials & Shows', 'More']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function ResponsiveAppBar2() {
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
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginLeft: '250px',
            }}
          >
            {pages.map((page) => {
              if (page === 'News') {
                return <Newsdropdown key={page} />; // Use Newsdropdown component for the 'News' page
              } else if (page === 'Photo Gallery') {
                return <Photogallerydropdown key={page} />;}
                else if (page === 'Play') {
                  return <Playdropdown key={page} />;}
                  else if (page === 'Reviews') {
                    return <Reviewsdropdown key={page} />;}
                    else if (page === 'Videos') {
                      return <Videosdropdown key={page} />;}
                      else if (page === 'Articles') {
                        return <Articlesdropdown key={page} />;}
                        else if (page === 'Celebrity') {
                          return <Celebritydropdown key={page} />;}
                          else if (page === 'Tv Serials & Shows') {
                            return <Tvserialsdropdown key={page} />;}
                            else if (page === 'More') {
                              return <Moredropdown key={page} />;}
                {
                return (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                    }}
                  >
                    {page}
                  </Button>
                );
              }
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar2;

