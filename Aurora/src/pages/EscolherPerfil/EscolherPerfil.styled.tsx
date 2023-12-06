import { styled, Card, Grid, Typography, Button } from "@mui/material";

export const Item = styled(Card)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(1),
    backgroundColor: "#FE9E0D",
    fontFamily: "Josefin Sans",
    borderRadius: theme.spacing(1),
    boxShadow:" 10px 8px 10px #CC6600",
}));

export const ButtonEscolha = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: "#f27405",
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(1),

    "&:hover":{
        backgroundColor: "#CC6600"
    }
}));

export const GridContainer = styled(Grid)({
    backgroundColor: '#FBD4B1', 
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"});

export const Titulo = styled(Typography)(({ theme }) => ({
    fontWeight: 1000,
    textAlign: 'center',
    fontSize: theme.spacing(5),
    marginBottom: theme.spacing(2)
}));

export const TituloCard = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontSize: theme.spacing(2.5),
    fontWeight: 'bold'
}));

export const Img = styled('img')({
    width: "100%",
    alignItems: 'center'
});

export const AuroraLogo = styled('img')(({theme}) => ({
    width: theme.spacing(30),
    alignItems: 'center',
    marginBottom: theme.spacing(3)
}));