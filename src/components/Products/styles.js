import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: '#e9e9e9',
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}))
