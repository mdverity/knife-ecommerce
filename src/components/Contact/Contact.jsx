import React from 'react'
import useStyles from './styles'
import { Container, Typography } from '@material-ui/core'

const Contact = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container>
        <Typography variant='h2'>Contact Page</Typography>
      </Container>
    </main>
  )
}

export default Contact
