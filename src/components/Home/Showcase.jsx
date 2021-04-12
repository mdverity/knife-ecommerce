import React from 'react'
import { Grid, Typography, Button, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Showcase = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={8} className={classes.floatRight}>
          <Grid item xs={12} className={classes.showcaseImage} />
        </Grid>
        <Grid item xs={12} md={4} className={classes.floatLeft}>
          <Container
            xs={12}
            style={{
              height: '60vh',
              background: '#1D282A',
              boxShadow: 'inset 0px 4px 100px 20px rgba(0, 0, 0, 0.25)',
            }}
            justify='center'
            align='center'
            display='column'
          >
            <Typography
              variant='h3'
              color='primary'
              align='center'
              style={{ paddingTop: '1.5rem', height: '20%' }}
            >
              Why Knifty?
            </Typography>
            <Container
              //   alignItems='center'
              style={{
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem 1rem',
              }}
            >
              <Typography
                variant='body1'
                color='primary'
                className={classes.showcaseText}
              >
                We source only the highest quality aogami steel from the most
                reputable vendors.
              </Typography>

              <div
                style={{
                  display: 'flex',
                  width: '200px',
                  height: '0',
                  borderBottom: '1px solid #B8C6C8',
                  marginInline: 'auto',
                }}
              />

              <Typography
                variant='body1'
                color='primary'
                className={classes.showcaseText}
              >
                All of our knives are hand crafted in Japan, made by a true
                master of their craft.
              </Typography>

              <div
                style={{
                  display: 'flex',
                  width: '200px',
                  height: '0',
                  borderBottom: '1px solid #B8C6C8',
                  marginInline: 'auto',
                }}
              />

              <Typography
                variant='body1'
                color='primary'
                className={classes.showcaseText}
              >
                With a 60-day money back guarantee, there’s no risk to try the
                best knife of your life.
              </Typography>
            </Container>
          </Container>
          <Container
            xs={12}
            style={{
              height: '40vh',
              display: 'grid',
              placeItems: 'center',
              boxShadow: 'inset 0px 4px 100px 20px rgba(0, 0, 0, 0.25)',
            }}
            background='primary'
            justify='center'
            align='center'
            display='column'
          >
            <div>
              <Typography
                variant='h3'
                color='secondary'
                align='center'
                style={{ paddingTop: '1rem' }}
              >
                'Cause Knife.
              </Typography>
              <Button
                component={Link}
                to='/store'
                variant='outlined'
                style={{ marginTop: '3rem' }}
                color='secondary'
              >
                Start Shopping
              </Button>
              <Typography
                variant='h6'
                color='secondary'
                align='center'
                style={{}}
              >
                for your new favorite knife!
              </Typography>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default Showcase
