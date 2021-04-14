import React from 'react'
import useStyles from './styles'
import { Grid } from '@material-ui/core'
import Hero from './Hero'
import Showcase from './Showcase'
import { motion } from 'framer-motion'

import HomeCarousel from './HomeCarousel'

const Home = ({ products }) => {
  const classes = useStyles()

  return (
    <motion.main
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className={classes.content}
    >
      {/* <div className={classes.toolbar} /> */}
      <Grid container style={{ padding: 0 }}>
        <Hero />

        <HomeCarousel products={products} />

        <Showcase />
      </Grid>
    </motion.main>
  )
}

export default Home
