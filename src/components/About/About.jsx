import React from 'react'
import useStyles from './styles'
import { Container, Typography, Grid } from '@material-ui/core'

const About = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container>
        {/* <Typography variant='h2'> */}
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              background: '#B8C6C8',
              height: '80vh',
              boxShadow: 'inset 0px 4px 100px 20px rgba(0, 0, 0, 0.25)',
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={classes.aboutTopImage}
            // style={{ background: '#e9e9e9', height: '80vh' }}
          />
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.floatRight}>
            <Grid
              item
              xs={12}
              style={{
                height: '80vh',
                background: '#B8C6C8',
                boxShadow: 'inset 0px 4px 100px 20px rgba(0, 0, 0, 0.25)',
              }}
              justify='center'
              align='center'
              display='column'
            >
              nice
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className={classes.floatLeft}>
            <Grid item xs={12} className={classes.aboutBottomImage} />
          </Grid>
        </Grid>
        {/* </Typography> */}
      </Container>
    </main>
  )
}

export default About
