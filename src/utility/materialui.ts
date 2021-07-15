import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/green';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        '& .MuiButton-root': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    },
}));

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsla(94, 30%, 43%, 1)'
        },
        secondary: {
            main: 'hsla(24, 53%, 31%, 1)',
        },
    },
    overrides: {
        MuiInputBase: {
            input: {
                // backgroundColor: lightGreen[100],
            }
        }
    }
});