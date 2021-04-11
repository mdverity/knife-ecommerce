import { makeStyles } from '@material-ui/core/styles'
import heroImage from '../../assets/images/hero-image.jpg'
import showcaseImage from '../../assets/images/showcase-image.jpg'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },

  heroImage: {
    height: '100vh',
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
  },

  showcaseImage: {
    height: '100vh',
    backgroundImage: `url(${showcaseImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'right',
    },
  },

  floatRight: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      order: '1',
    },
    [theme.breakpoints.up('md')]: {
      order: '2',
    },
  },

  floatLeft: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      order: '2',
    },
    [theme.breakpoints.up('md')]: {
      order: '1',
    },
  },

  footerList: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },

  root: {
    flexGrow: 1,
  },
}))
