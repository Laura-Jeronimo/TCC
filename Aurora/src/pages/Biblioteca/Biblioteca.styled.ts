import { Grid, Typography, styled } from "@mui/material";

export const GridPesquisa = styled(Grid) ({
    display: 'flex',
    justifyContent: 'space-between'
})

export const GridBiblioteca = styled(Grid)(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(14),
}))

export const GridPagination = styled(Grid)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4)
}))

export const Filtros = styled(Grid)(({theme}) => ({
    display: 'flex',
    marginTop: theme.spacing(8),
}))

export const Titulo = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(8),
    fontSize: '40px',
    color: '#BF1304',
    fontWeight: 900,
    lineHeight: '65px'
}))

export const Capa = styled('img')(({theme}) => ({
    paddingLeft: theme.spacing(4),
    marginTop: theme.spacing(2),
}))

export const TituloLivros = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(2),
    fontWeight: 800,
    marginLeft: theme.spacing(3.5)
}))

export const TextoLivros = styled(Typography)(({theme}) => ({
    marginLeft: theme.spacing(3.5)
}))