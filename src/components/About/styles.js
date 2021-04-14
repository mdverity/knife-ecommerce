import { makeStyles } from '@material-ui/core/styles'
import aboutOne from '../../assets/images/about1.jpg'
import aboutTwo from '../../assets/images/about2.jpg'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    backgroundColor: '#e9e9e9',
    padding: theme.spacing(3),
    minHeight: '100vh',
  },

  root: {
    flexGrow: 1,
  },

  aboutTopImage: {
    backgroundImage: `radial-gradient(61.46% 61.44% at 72.73% 66.41%, rgba(28, 28, 28, 0) 0%, rgba(0, 0, 0, 0.35) 100%), url(${aboutOne})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    border: '2px solid #1D282A',

    [theme.breakpoints.down('sm')]: {
      backgroundPosition: '50% 20%',
      height: '65vh',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: '100% 10%',
      height: '80vh',
    },
  },

  aboutTopText: {
    // border: '3px solid #1D282A',
    height: '80vh',
    display: 'grid',
    placeItems: 'center',
    // boxShadow: 'inset 0px 4px 100px 20px rgba(0, 0, 0, 0.15)',

    [theme.breakpoints.down('sm')]: {
      borderBottom: 'none',
    },
    [theme.breakpoints.up('md')]: {
      borderRight: 'none',
      borderBottom: 'none',
    },
  },

  aboutBottomImage: {
    backgroundImage: `radial-gradient(34.41% 36.02% at 53.67% 57.09%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%), url(${aboutTwo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    border: '2px solid #1D282A',

    [theme.breakpoints.down('sm')]: {
      backgroundPosition: '50% 20%',
      height: '65vh',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'top left',
      height: '80vh',
    },
  },

  aboutBottomText: {
    // border: '3px solid #1D282A',
    height: '80vh',
    display: 'grid',
    placeItems: 'center',
    // textAlign: 'center',
    // boxShadow: 'inset 0px 4px 100px 20px rgba(0, 0, 0, 0.15)',

    [theme.breakpoints.down('sm')]: {
      borderTop: 'none',
      borderBottom: 'none',
    },
    [theme.breakpoints.up('md')]: {
      borderLeft: 'none',
      borderTop: 'none',
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
}))
