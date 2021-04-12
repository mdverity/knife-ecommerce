import React from 'react'
import useStyles from './styles'
import { Container, Typography } from '@material-ui/core'

const About = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container>
        <Typography variant='h2'>About Page</Typography>
      </Container>
    </main>
  )
}

export default About
