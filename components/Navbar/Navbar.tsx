import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import routes from 'utils/routes'
import BrandLinkButton from './BrandLinkButton'
import NavbarMenuButtons from './NavbarMenuButtons'
import NavbarMobile from './NavbarMobile'
import NavigationDrawer from './NavigationDrawer'
import NavigationDrawerButton from './NavigationDrawerButton'
import SearchBar from './SearchBar'
import { NavbarProvider } from './useNavbar'

const menuId = 'primary-search-account-menu'
const mobileMenuId = 'primary-search-account-menu-mobile'

type Props = {
  logoImage?: string
  title?: string
}

export default function Navbar(props: Props) {
  const { logoImage = '', title = '' } = props
  const theme = useTheme()
  const router = useRouter()
  const isViewXS = !useMediaQuery(theme.breakpoints.up('sm'))
  const isHomepage = router.pathname == routes.index
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
  })
  const isTransparent = isHomepage && !scrollTrigger
  return (
    <NavbarProvider
      initialState={{
        menuId,
        mobileMenuId,
        logoImage,
        title,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          elevation={isTransparent ? 0 : 1}
          color={isTransparent ? 'transparent' : 'primary'}
          sx={{
            color: 'white',
          }}
        >
          {isViewXS ? (
            <NavbarMobile logoImage={logoImage} />
          ) : (
            <Toolbar>
              <NavigationDrawerButton />
              <BrandLinkButton logoImage={logoImage} />
              <SearchBar />
              <Box sx={{ flexGrow: 1 }} />
              <NavbarMenuButtons />
            </Toolbar>
          )}
        </AppBar>
        {!isHomepage && <Toolbar />}
        {isViewXS && !isHomepage && <Toolbar />}
      </Box>
      <NavigationDrawer />
    </NavbarProvider>
  )
}
