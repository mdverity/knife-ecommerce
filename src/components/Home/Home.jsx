import React from 'react'
import useStyles from './styles'
import { Grid } from '@material-ui/core'
import Hero from './Hero'
import Showcase from './Showcase'

import HomeCarousel from './HomeCarousel'

const Home = ({ products }) => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      {/* <div className={classes.toolbar} /> */}
      <Grid container style={{ padding: 0 }}>
        <Hero />

        <HomeCarousel products={products} />

        <Showcase />
      </Grid>
    </main>
  )
}

export default Home
