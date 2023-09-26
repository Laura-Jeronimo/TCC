import { Grid, Typography, styled } from "@mui/material";

export const GridContainer = styled(Grid)({
    height: '100vh',
    width: '100%',   
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#AEE8FE',
    flexDirection: 'column'
});

export const Texto = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(5),
    fontWeight: 'bold',
    marginTop: theme.spacing(15),
    flex: 1,
}));

export const Grama = styled('img')({
    width: '100%',
    bottom: 0
});

export const Seta = styled('img')(({theme}) => ({
    position: 'fixed',
    top: 0,
    right: 1,
    margin: '2rem',
    width: '3%',

    [theme.breakpoints.down("lg")]: {
		width: '7%',
	},
    [theme.breakpoints.down("sm")]: {
		width: '10%',
	},
    [theme.breakpoints.down("xs")]: {
		width: '20%',
	},
}));