import React from 'react'
import {
  AppBar,
  Toolbar,
  Hidden,
  Badge,
  IconButton,
  MenuItem,
  Typography,
  Container,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { NavLink, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'
import useStyles from './styles'
import MobileMenu from '../MobileMenu/MobileMenu'

const navLinks = [
  { title: `Shop`, path: `/store` },
  { title: `Home`, path: `/` },
  { title: `About`, path: `/about` },
  { title: `Contact`, path: `/contact` },
]

const Navbar = ({ totalItems }) => {
  const classes = useStyles()
  const location = useLocation()

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography
              component={NavLink}
              to='/'
              className={classes.title}
              color='inherit'
            >
              <img
                src={logo}
                alt='Knifty Logo'
                height='25px'
                className={classes.image}
              />
            </Typography>
            <div className={classes.grow} />

            <Hidden xsDown>
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
            </Hidden>

            <Hidden smUp>
              <MobileMenu navLinks={navLinks} />
            </Hidden>

            {location.pathname === '/store' && (
              <div className={classes.button}>
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
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar
