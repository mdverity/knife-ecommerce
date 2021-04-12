import React from 'react'
import {
  Grid,
  Typography,
  Button,
  Container,
  TextField,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { fade, makeStyles } from '@material-ui/core/styles'

const Footer = ({ products }) => {
  const classes = useStyles()

  const useStylesInput = makeStyles((theme) => ({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#DAECE7',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#e9e9e9',
      },
      '&$focused': {
        backgroundColor: '#B8C6C8',
        boxShadow: `${fade(theme.palette.text.primary, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.text.primary,
      },
    },
    focused: {},
  }))

  function CustomTextField(props) {
    const classes = useStylesInput()

    return (
      <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
    )
  }

  return (
    <Grid
      container
      style={{
        background: '#1D282A',
        boxShadow: 'inset 0px 4px 100px 100px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Container
        maxWidth='lg'
        component={Grid}
        container
        direction='row'
        justify='center'
        // alignItems='center'
        style={{ marginTop: '2rem' }}
        // spacing={4}
      >
        <Grid
          item
          xs={5}
          md={3}
          style={{ height: 'fit-content', padding: '10px' }}
        >
          <Grid container direction='column' className={classes.footerList}>
            <Typography variant='h6' color='primary'>
              Navigation
            </Typography>
            <Link to='/store' className={classes.footerLink}>
              Shop
            </Link>
            <Link to='/' className={classes.footerLink}>
              Home
            </Link>
            <Link to='/about' className={classes.footerLink}>
              About
            </Link>
            <Link to='/contact' className={classes.footerLink}>
              Contact
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          xs={5}
          md={3}
          style={{ height: 'fit-content', padding: '10px' }}
        >
          <Grid container direction='column' className={classes.footerList}>
            <Typography variant='h6' color='primary'>
              Latest Products
            </Typography>
            {products.slice(0, 4).map((product, index) => (
              <Link to='/store' key={index} className={classes.footerLink}>
                {product.name}
              </Link>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={10} md={3} className={classes.tweetBox}>
          <Grid container direction='column'>
            <Typography variant='h6' color='primary'>
              Latest Tweets
            </Typography>
            <br />
            <Typography variant='body2' color='primary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis
              vero numquam facere eaque! #lorem
            </Typography>
            <br />
            <Typography variant='body2' color='primary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              voluptatem! #lovelorem
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={10}
          md={3}
          style={{ height: 'fit-content', padding: '10px' }}
          className={classes.footerList}
        >
          <Grid container direction='column'>
            <Typography variant='h6' color='primary'>
              Sign up for
              <br />
              our newsletter:
            </Typography>
            <form
              autoComplete='off'
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <CustomTextField
                label='Your Email'
                type='email'
                className={classes.emailInput}
                variant='filled'
                id='footer-email-input'
                InputLabelProps={{
                  style: { color: '#1D282A' },
                }}
              />
              <Button
                variant='contained'
                type='submit'
                style={{
                  width: 'fit-content',
                  alignSelf: 'flex-end',
                  marginTop: '5px',
                }}
                color='primary'
              >
                Sign Up
              </Button>
            </form>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.footerSignature} align='center'>
          <Typography
            variant='body2'
            color='primary'
            style={{ fontSize: '12px' }}
          >
            © 2021 KniftyKnife. Built with Commerce.js
          </Typography>
          <Typography
            variant='body2'
            style={{ marginTop: '5px', fontSize: '12px' }}
            color='primary'
          >
            <Link to='/' style={{ color: '#DAECE7' }}>
              Privacy Policy
            </Link>{' '}
            -{' '}
            <Link to='/' style={{ color: '#DAECE7' }}>
              Terms of Service
            </Link>
          </Typography>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Footer
