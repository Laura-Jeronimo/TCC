import { styled, Grid, Typography, Box, Button } from "@mui/material";
import { FaPlay } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { IoIosTime } from "react-icons/io";
import { GiSpellBook } from "react-icons/gi";

export const Titulo = styled(Typography)(({ theme }) => ({
    fontSize: '40px',
    color: '#BF1304',
    fontWeight: 700,
    lineHeight: '65px',
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(10)
}))

export const Texto = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(3),
    fontWeight: 900,
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2)
}))

export const Leituras = styled(Grid)(({ theme }) => ({
    display: 'flex',
    marginLeft: theme.spacing(10)
}));

export const TituloLeituras = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(4),
    fontWeight: 700,
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
    marginBottom: theme.spacing(1)
}))

export const Image = styled('img')(({ theme }) => ({
    padding: theme.spacing(3)
}))


export const CapaLivros = styled('img')(({ theme }) => ({
    paddingLeft: theme.spacing(2)
}))

export const TituloBox = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    fontWeight: 900,
    color: '#000',
    marginTop: '30px',
    textAlign: 'center',
}))

export const TextoBox = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(1.75),
    textAlign: 'center'
}))


export const TextoCard = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    textAlign: 'center',
    fontWeight: 300,
    color: '#730202'
}))

export const GridButton = styled(Grid)(({ theme }) => ({
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

export const GridLivros = styled(Grid)({
    display: 'flex'
})

export const Seta = styled(FaRegArrowAltCircleRight) ({
    fontSize: '50px',
    color: '#FE9E0D',
    padding: '100%',
    marginTop: '100%',
    cursor: 'pointer'
})

export const TituloLivros = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(2),
    fontWeight: 800,
    marginLeft: theme.spacing(1.5),
}))

export const TextoLivros = styled(Typography)(({theme}) => ({
    marginLeft: theme.spacing(1.5)
}))

export const Center = styled(Grid)(({theme}) => ({
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4)
}))

export const CardInformacao = styled(Box)(({theme}) => ({
    background: 'rgba(240, 237, 255, 0.80)',
    borderRadius: theme.spacing(2),
    width: '80%',
    padding: theme.spacing(1),
    textAlign: 'center'
}))

export const IconBooks = styled(SiBookstack)(({theme}) => ({
    margin: theme.spacing(2),
    fontSize: theme.spacing(7),
    color: '#FE9E0D'
}))

export const IconTime = styled(IoIosTime)(({theme}) => ({
    margin: theme.spacing(2),
    fontSize: theme.spacing(7),
    color: '#FE9E0D'
}))

export const IconGender = styled(GiSpellBook)(({theme}) => ({
    margin: theme.spacing(2),
    fontSize: theme.spacing(7),
    color: '#FE9E0D'
}))

