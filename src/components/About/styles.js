import { makeStyles } from '@material-ui/core/styles'
import aboutOne from '../../assets/images/about-one.jpg'
import aboutTwo from '../../assets/images/about-two.jpg'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    minHeight: '100vh',
  },

  root: {
    flexGrow: 1,
  },

  aboutTopImage: {
    backgroundImage: `radial-gradient(34.41% 36.02% at 53.67% 57.09%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%), url(${aboutOne})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
      height: '65vh',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'right',
      height: '80vh',
    },
  },

  aboutBottomImage: {
    backgroundImage: `radial-gradient(34.41% 36.02% at 53.67% 57.09%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%), url(${aboutTwo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
      height: '65vh',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'left',
      height: '80vh',
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
    // flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {
      order: '2',
    },
    [theme.breakpoints.up('md')]: {
      order: '1',
    },
  },
}))
