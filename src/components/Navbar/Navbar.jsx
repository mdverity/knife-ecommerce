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
        <Container maxWidth='xl'>
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
                height='60px'
                className={classes.image}
              />
            </Typography>
            <div className={classes.grow} />
            {location.pathname === '/store' && (
              <div className={classes.button}>
                <IconButton
                  component={NavLink}
                  to='/cart'
                  aria-label='Show cart items'
                  color='inherit'
                >
                  <Badge badgeContent={totalItems} color='error'>
                    <ShoppingCart style={{ color: '#1D282A' }} />
                  </Badge>
                </IconButton>
              </div>
            )}
            <Hidden smDown>
              {navLinks.map(({ title, path }) => (
                <MenuItem key={title} className={classes.menuItem}>
                  <Typography
                    component={NavLink}
                    exact
                    to={path}
                    className={classes.menuItemText}
                    activeStyle={{
                      textShadow:
                        '0px 0px 2px rgba(29, 40, 42, 1), 0px 0px 1px rgba(29, 40, 42, 1)',
                    }}
                  >
                    {title}
                  </Typography>
                </MenuItem>
              ))}
            </Hidden>

            <Hidden mdUp>
              <MobileMenu navLinks={navLinks} />
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar
