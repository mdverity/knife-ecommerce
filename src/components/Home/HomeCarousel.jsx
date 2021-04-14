import React from 'react'
import useStyles from './styles'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Hidden,
  Container,
  Typography,
} from '@material-ui/core'

import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'

const HomeCarousel = ({ products }) => {
  const classes = useStyles()
  const [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
  ] = products.slice(0, 6).map((item) => item)

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          // height: 'fit-content',
          display: 'flex',
          minHeight: '80vh',
          background: '#e9e9e9',
          // boxShadow: 'inset 0px 4px 100px 20px rgba(0, 0, 0, 0.25)',
          paddingBottom: '1rem',
          alignItems: 'center',
        }}
      >
        <Container
          style={{
            display: 'grid',
            placeItems: 'center',
            height: '80%',
            width: '100%',
          }}
        >
          <Typography
            variant='h3'
            color='secondary'
            // style={{ fontWeight: '400' }}
            gutterBottom
          >
            Latest Products
          </Typography>
          <Carousel indicators={false} navButtonsAlwaysVisible={true}>
            <Grid container>
              <Hidden smDown>
                <Grid item md={4} component={Card} className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>{product1?.name}</Typography>
                  </CardContent>
                  <CardMedia
                    component={Link}
                    to='/store'
                    className={classes.media}
                    image={product1?.media.source}
                  />
                </Grid>
              </Hidden>
              <Grid
                item
                xs={12}
                md={4}
                sm={6}
                component={Card}
                className={classes.card}
              >
                <CardContent className={classes.cardContent}>
                  <Typography variant='h6'>{product2?.name}</Typography>
                </CardContent>
                <CardMedia
                  component={Link}
                  to='/store'
                  className={classes.media}
                  image={product2?.media.source}
                />
              </Grid>
              <Hidden xsDown>
                <Grid
                  item
                  sm={6}
                  md={4}
                  component={Card}
                  className={classes.card}
                >
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>{product3?.name}</Typography>
                  </CardContent>
                  <CardMedia
                    component={Link}
                    to='/store'
                    className={classes.media}
                    image={product3?.media.source}
                  />
                </Grid>
              </Hidden>
            </Grid>
            <Grid container>
              <Hidden smDown>
                <Grid item md={4} component={Card} className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>{product4?.name}</Typography>
                  </CardContent>
                  <CardMedia
                    component={Link}
                    to='/store'
                    className={classes.media}
                    image={product4?.media.source}
                  />
                </Grid>
              </Hidden>
              <Grid
                item
                xs={12}
                md={4}
                sm={6}
                component={Card}
                className={classes.card}
              >
                <CardContent className={classes.cardContent}>
                  <Typography variant='h6'>{product5?.name}</Typography>
                </CardContent>
                <CardMedia
                  component={Link}
                  to='/store'
                  className={classes.media}
                  image={product5?.media.source}
                />
              </Grid>
              <Hidden xsDown>
                <Grid
                  item
                  sm={6}
                  md={4}
                  component={Card}
                  className={classes.card}
                >
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>{product6?.name}</Typography>
                  </CardContent>
                  <CardMedia
                    component={Link}
                    to='/store'
                    className={classes.media}
                    image={product6?.media.source}
                  />
                </Grid>
              </Hidden>
            </Grid>
          </Carousel>
        </Container>
      </Grid>
    </Grid>
  )
}

export default HomeCarousel
