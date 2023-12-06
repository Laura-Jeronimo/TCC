import { Grid, styled, Typography } from "@mui/material";
import { MdFavorite } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";

export const Titulo = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(8),
    fontSize: '40px',
    color: '#BF1304',
    fontWeight: 900,
    lineHeight: '65px'
}))

export const GridIconeTexto = styled(Grid)({
    display: 'flex',
    flexDirection: 'row'
})

export const TitulosListas = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    fontSize: '25px',
    fontWeight: 900,
    lineHeight: '65px'
}))

export const FavIcon = styled(MdFavorite)(({theme}) => ({
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(3.7),
    marginRight: theme.spacing(1),
    fontSize: '30px',
    color: '#730202',
}))

export const ReadingIcon = styled(FaBookOpenReader)(({theme}) => ({
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(3.7),
    marginRight: theme.spacing(1),
    fontSize: '30px',
    color: '#730202',
}))

export const ToReadIcon = styled(MdBookmarkAdd)(({theme}) => ({
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(3.7),
    marginRight: theme.spacing(1),
    fontSize: '30px',
    color: '#730202',
}))

export const GridLeituras = styled(Grid)(({theme}) => ({
    display: 'flex',
    marginLeft: theme.spacing(10),
}))

export const Capa = styled('img')(({theme}) => ({
    paddingLeft: theme.spacing(4),
    marginTop: theme.spacing(2),
    width: '60%%'
}))

export const TituloLivros = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(2),
    fontWeight: 800,
    marginLeft: theme.spacing(3.5)
}))

export const TextoLivros = styled(Typography)(({theme}) => ({
    marginLeft: theme.spacing(3.5),
    fontSize: theme.spacing(2)
}))

export const TextoAviso = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    marginLeft: theme.spacing(5),
    fontWeight: 500,
    marginBottom: theme.spacing(2)
}))
