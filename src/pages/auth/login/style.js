import { makeStyles } from '@mui/styles';

const Style = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    h1: {
        background: 'linear-gradient(45deg, green 30%, orange 90%)',
        color: 'white'
    }
}));

export default Style;