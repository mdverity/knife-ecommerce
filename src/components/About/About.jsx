import React from 'react'
import useStyles from './styles'
import { Container, Typography, Grid } from '@material-ui/core'

const About = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container>
        <Typography
          variant='h2'
          style={{ marginBottom: '5rem', borderBottom: '5px solid #B8C6C8' }}
        >
          About Us
        </Typography>
      </Container>
      <Container>
        {/* <Typography variant='h2'> */}
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            md={6}
            className={classes.aboutTopText}
            display='column'
          >
            <Grid
              container
              style={{ height: '80%', width: '80%' }}
              justify='space-between'
            >
              <Typography
                variant='h3'
                gutterBottom
                color='secondary'
                style={{
                  marginInline: 'auto',
                  borderBottom: '1px solid #1D282A',
                  marginBottom: 'auto',
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant='body1'
                gutterBottom
                color='textPrimary'
                style={{ paddingTop: '2rem' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, ex? Expedita nam quisquam voluptatibus adipisci!
              </Typography>
              <Typography variant='body1' gutterBottom color='textPrimary'>
                Hic repellendus ex accusantium laudantium, iure doloremque aut
                maxime officiis ipsam sunt fugit in dolores debitis, saepe
                maiores rem veniam eligendi earum?
              </Typography>
              <Typography variant='body1' gutterBottom color='textPrimary'>
                Provident blanditiis nemo, aut asperiores facilis iusto
                perspiciatis exercitationem sunt facere. Laudantium, rem?
                Architecto hic ad beatae velit quasi, quos id, exercitationem
                fugiat quaerat dolor, corporis dolorem possimus facilis nemo
                repudiandae neque!
              </Typography>
            </Grid>
          </Grid>
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
              className={classes.aboutBottomText}
              // align='center'
              display='column'
            >
              <Grid
                container
                style={{ height: '80%', width: '80%' }}
                justify='space-between'
              >
                <Typography
                  variant='h3'
                  // gutterBottom
                  color='secondary'
                  style={{
                    marginInline: 'auto',
                    borderBottom: '1px solid #1D282A',
                    marginBottom: 'auto',
                  }}
                >
                  Our Values
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom
                  color='textPrimary'
                  style={{ paddingTop: '2rem' }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur maiores corporis quidem itaque perferendis,
                  assumenda, ab, ducimus quisquam aperiam a iusto laudantium!
                </Typography>
                <Typography variant='body1' gutterBottom color='textPrimary'>
                  Veritatis, nihil sapiente aut, nulla doloremque itaque autem
                  esse doloribus obcaecati facilis suscipit consequuntur
                  molestias!
                </Typography>
                <Typography variant='body1' gutterBottom color='textPrimary'>
                  Eius nisi, modi at nostrum totam perferendis saepe unde?
                  Placeat, ea explicabo?
                </Typography>
                <Typography variant='body1' gutterBottom color='textPrimary'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, impedit quia. Enim nobis laborum modi illo sunt
                  iure quaerat?
                </Typography>
                <Typography variant='body1' gutterBottom color='textPrimary'>
                  Architecto dignissimos incidunt enim non qui!
                </Typography>
              </Grid>
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
