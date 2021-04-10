import React from 'react'
import useStyles from './styles'

const Contact = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h1>Contact Page</h1>
    </main>
  )
}

export default Contact
