import React from 'react'
import useStyles from './styles'

const About = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h1>About Page</h1>
    </main>
  )
}

export default About
