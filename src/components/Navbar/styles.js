import { makeStyles, fade } from '@material-ui/core/styles'

const drawerWidth = 0

export default makeStyles((theme) => ({
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
    // borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  title: {
    // flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    // padding: '6px',
    paddingLeft: '10px',
    paddingRight: 0,
    marginTop: '2px',
    background: 'rgba(218, 236, 231, 0.75)',
    borderRadius: '20px',
    // boxShadow: '-15px 0px 25px -5px #DAECE7',
  },

  image: {
    marginRight: '10px',
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  grow: {
    flexGrow: 1,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },

  menuItem: {
    background: 'rgba(218, 236, 231,0.75)',
    marginLeft: '5px',

    '&:active, &:hover': {
      background: 'rgba(29, 40, 42, 0.75)',
      '& *': {
        color: '#DAECE7',
        textShadow: '0px 0px 1px rgba(29, 40, 42, 1)',
      },
    },
  },

  menuItemText: {
    // padding: '0 10px',
    textDecoration: 'none',
    fontWeight: '500',
    color: '#1D282A',
    transition: 'all 0.5s ease',
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))
