import { styled, Grid, Typography, Box, Button } from "@mui/material";
import { FaPlay } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const Header = styled(Grid)(({
    display: 'flex',
    borderBottom: 'solid 1px #D9D9D9',
}));

export const IconSol = styled('img')(({ theme }) => ({
    width: '20%',
    marginLeft: theme.spacing(4)
}));

export const Titulo = styled(Typography)(({ theme }) => ({
    fontSize: '40px',
    color: '#BF1304',
    fontWeight: 700,
    lineHeight: '65px',
    marginTop: theme.spacing(5)
}))

export const Texto = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(4),
    fontWeight: 400,
}))

export const Leituras = styled(Grid)(({ theme }) => ({
    display: 'flex',
    marginLeft: theme.spacing(10)
}));

export const TituloLeituras = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(4),
    fontWeight: 700,
    marginTop: '30px'
}))

export const TextoLeituras = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2)
}))

export const BoxLeitura = styled(Box)(({ theme }) => ({
    width: '500px',
    height: ' 240px',
    background: 'rgba(254, 158, 13, 0.60)',
    borderRadius: theme.spacing(3),
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    marginTop: theme.spacing(1)
}))

export const Capa = styled('img')(({ theme }) => ({
    padding: theme.spacing(3)
}))


export const CapaLivros = styled('img')(({ theme }) => ({
    paddingLeft: theme.spacing(2)
}))

export const TituloBox = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    fontWeight: 700,
    marginTop: '30px'
}))

export const TextoBox = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(1.75)
}))

export const GridButton = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(9),
    marginTop: theme.spacing(3)
}))

export const ButtonLeitura = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(100deg, #FF8213 -5.85%, #FE9E0D 109.55%)',
    color: theme.palette.secondary.contrastText,
    fontWeight: 700,
    borderRadius: theme.spacing(2),
    height: '35px',
    width: '135px'
}));

export const IconPlay = styled(FaPlay)(({ theme }) => ({
    fontSize: theme.spacing(2),
    padding: theme.spacing(0.8),
    marginBottom: theme.spacing(0.5),
}))

export const GridLivros = styled(Grid)(({ theme }) => ({
    display: 'flex'
}))

export const Seta = styled(FaRegArrowAltCircleRight)(({theme}) => ({
    fontSize: '50px',
    color: '#FE9E0D',
    padding: '100%',
    marginTop: '100%'
}))

export const TituloLivros = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(2),
    fontWeight: 800,
    marginLeft: theme.spacing(1.5)
}))

export const TextoLivros = styled(Typography)(({theme}) => ({
    marginLeft: theme.spacing(1.5)
}))