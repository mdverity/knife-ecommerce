import React from 'react'
import useStyles from './styles'
import { Container, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Home = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      {/* <div className={classes.toolbar} /> */}
      <Grid container fluid style={{ padding: 0 }}>
        <Grid container xs={12} md={8}>
          <Grid xs={12} className={classes.heroImage} />
        </Grid>
        <Grid container xs={12} md={4}>
          <Grid
            xs={12}
            style={{ height: '60vh', background: '#DAECE7' }}
          ></Grid>
          <Grid
            xs={12}
            style={{ height: '40vh', background: '#1D282A' }}
          ></Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid
            item
            xs={12}
            style={{ height: '60vh', background: '#DAECE7' }}
          ></Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid container xs={12} md={8} className={classes.floatRight}>
            <Grid item xs={12} className={classes.showcaseImage} />
          </Grid>
          <Grid container xs={12} md={4} className={classes.floatLeft}>
            <Grid
              item
              xs={12}
              style={{ height: '60vh', background: '#1D282A' }}
            />
            <Grid
              item
              xs={12}
              style={{ height: '40vh', background: '#DAECE7' }}
            />
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ background: '#1D282A' }}>
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
              container
              xs={5}
              md={3}
              style={{ height: 'fit-content', padding: '10px' }}
            >
              <Grid
                container
                direction='column'
                xs={12}
                className={classes.footerList}
              >
                <Typography variant='h5'>Navigation</Typography>
                <Link to='/store'>Shop</Link>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
              </Grid>
            </Grid>
            <Grid
              item
              xs={5}
              md={3}
              style={{ height: 'fit-content', padding: '10px' }}
            >
              <Grid
                container
                direction='column'
                xs={12}
                className={classes.footerList}
              >
                <Typography variant='h5'>Latest Products</Typography>
                <Link to='/store'>Shop</Link>
                <Link exact to='/'>
                  Home
                </Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
              </Grid>
            </Grid>
            <Grid
              item
              xs={10}
              md={3}
              style={{ height: 'fit-content', padding: '10px' }}
            >
              <Grid container direction='column' xs={12}>
                <Typography variant='h5'>Latest Tweets</Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  omnis vero numquam facere eaque! #lorem #love
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  voluptatem! #ilovelorem
                </p>
              </Grid>
            </Grid>
            <Grid
              item
              xs={10}
              md={3}
              style={{ height: 'fit-content', padding: '10px' }}
              className={classes.footerList}
            >
              <Grid container direction='column' xs={12}>
                <Typography variant='h5'>Navigation</Typography>
                <Link to='/store'>Shop</Link>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ paddingTop: '2rem', paddingBottom: '10px' }}
              align='center'
            >
              <Typography variant='body2'>
                © 2021 KniftyKnife. Built with Commerce.js
              </Typography>
              <Typography variant='body2' style={{ marginTop: '5px' }}>
                Privacy Policy - Terms of Service
              </Typography>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </main>
  )
}

export default Home
