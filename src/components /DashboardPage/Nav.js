import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Divider from '@mui/material/Divider'
import {
  StyledAppBar,
  StyledToolbar,
  Logo,
  NavLinks,
  NavIcons,
  StyledButton,
  NotificationIconButton,
  SearchIconButton,
  ProfileIconButton,
  MobileMenuIcon,
  DrawerIconsContainer,
} from '../styles/Styles'

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setIsDrawerOpen(open)
  }

  const renderDrawerList = () => (
    <List>
      {[
        'Home',
        'TV Shows',
        'Movies',
        'New & Popular',
        'My List',
        'Browse by Languages',
      ].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={toggleDrawer(false)}>{text}</ListItemButton>
        </ListItem>
      ))}
      <Divider />
      {/* Icons Section in Drawer for Mobile */}
      <DrawerIconsContainer>
        <SearchIconButton>
          <SearchIcon />
        </SearchIconButton>

        <NotificationIconButton>
          <NotificationsIcon />
        </NotificationIconButton>
        <ProfileIconButton onClick={handleMenuOpen}>
          <AccountCircle />
        </ProfileIconButton>
      </DrawerIconsContainer>
    </List>
  )

  return (
    <StyledAppBar position='static'>
      <StyledToolbar>
        {/* Logo Section */}
        <Logo variant='h6'>Logo</Logo>

        {/* Desktop Navigation Links */}
        <NavLinks>
          <StyledButton>Home</StyledButton>
          <StyledButton>TV Shows</StyledButton>
          <StyledButton>Movies</StyledButton>
          <StyledButton>New & Popular</StyledButton>
          <StyledButton>My List</StyledButton>
          <StyledButton>Browse by Languages</StyledButton>
        </NavLinks>

        {/* Mobile Menu Icon */}
        <MobileMenuIcon onClick={toggleDrawer(true)}>
          <MenuIcon />
        </MobileMenuIcon>

        {/* Mobile Drawer */}
        <Drawer
          anchor='right'
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          {renderDrawerList()}
        </Drawer>

        {/* Icons Section for Desktop */}
        <NavIcons>
          <SearchIconButton>
            <SearchIcon />
          </SearchIconButton>

          <NotificationIconButton>
            <NotificationsIcon />
          </NotificationIconButton>
          <ProfileIconButton onClick={handleMenuOpen}>
            <AccountCircle />
          </ProfileIconButton>
          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </NavIcons>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default NavBar
