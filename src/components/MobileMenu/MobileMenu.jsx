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
  const [state, setState] = useState({ right: false })

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
        style={{ background: 'rgba(218, 236, 231,0.75)' }}
      >
        <MenuIcon style={{ color: '#1D282A' }} />
      </IconButton>
      <Drawer
        anchor='right'
        open={state.right}
        onOpen={toggleDrawer('right', true)}
        onClose={toggleDrawer('right', false)}
      >
        {sideDrawerList('right')}
      </Drawer>
    </>
  )
}

export default MobileMenu
