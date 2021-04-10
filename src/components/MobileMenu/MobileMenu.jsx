import React, { useState } from 'react'
import {
  IconButton,
  ListItem,
  ListItemText,
  List,
  Drawer,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'
import useStyles from './styles'

const MobileMenu = ({ navLinks }) => {
  const classes = useStyles()
  const [state, setState] = useState({ right: false }) // Add this
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState({ [anchor]: open })
  }

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component='nav'>
        {navLinks.map(({ title, path }) => (
          <NavLink to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  )

  return (
    <>
      <IconButton
        edge='start'
        aria-label='menu'
        onClick={toggleDrawer('right', true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={state.right}
        onOpen={toggleDrawer('right', true)}
        onClose={toggleDrawer('right', false)}
      >
        {sideDrawerList('right')}
      </Drawer>

      {/* <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {navLinks.map(({ title, path }) => (
        <MenuItem key={title}>
          <Typography
            component={NavLink}
            to={path}
            className={classes.menuItem}
          >
            {title}
          </Typography>
        </MenuItem>
      ))}

      <MenuItem>
        <IconButton
          component={NavLink}
          to='/cart'
          aria-label='Show cart items'
          color='inherit'
        >
          <Badge badgeContent={totalItems} color='primary'>
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu> */}
    </>
  )
}

export default MobileMenu
