import { Box, FormControl, FormLabel, Grid, Typography, styled } from '@mui/material'

export const MainDiv = styled('div')({
    display: 'flex',
    height: '100% !important',
})

export const Content = styled(Grid)({
    overflowX: 'hidden',
    flexBasis: "100%",

    ['@media (min-width: 1200px)']: {
        width: '100%',
        display: 'block',
        marginLeft: '22%',
    },
})

export const Titulo = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(4),
    marginTop: theme.spacing(6),
    fontWeight: 700,
    textAlign: 'center'
}));

export const Texto = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(3),
    fontWeight: 700,
}))

export const TextoResponsavel = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(3),
    fontWeight: 700,
    marginTop: theme.spacing(2),
    textAlign: 'center'
}))

export const GridComponents = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(5)
}));

export const FormControlGeneric = styled(FormControl)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(0.625),
}));

export const FormLabelGeneric = styled(FormLabel)(({ theme }) => ({
    color: theme.palette.grey[900],
    fontSize: theme.spacing(2.5),
    marginTop: theme.spacing(3),
}));

export const InputTextGeneric = styled('input')(({ theme }) => ({
    width: '250%',
    borderRadius: "16px",
    backgroundColor: 'rgba(240, 237, 255, 0.80)',
    fontFamily: 'Josefin Sans',
    fontSize: theme.spacing(2),
    fontWeight: 'bold',
    padding: theme.spacing(2),
}));

export const GridInfoLivros = styled(Grid)(({ theme }) => ({
    marginRight: '15%',
    marginTop: theme.spacing(9.5),
    justifyContent: 'center'
}));

export const TextoBox = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(3),
    color: theme.palette.grey[900],
    textAlign: 'center'
}));

export const BoxFavoritos = styled(Box)(({ theme }) => ({
    border: 'solid 1px #9E9999',
    width: '300px',
    height: '150px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
}));


export const BoxUltimosLidos = styled(Box)(({ theme }) => ({
    border: 'solid 1px #9E9999',
    width: '300px',
    height: '250px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
}));

export const BoxFilho = styled(Box)(({ theme }) => ({
    width: '530px',
    height: '100px',
    borderRadius: '16px',
    backgroundColor: 'rgba(240, 237, 255, 0.80)',
    marginTop: theme.spacing(3),
}));

export const GridInfoFilhos = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(9.5)
}))

export const ImgPerfil = styled('img')(({ theme }) => ({
    width: '15%',
    padding: theme.spacing(1)
}))

export const Img = styled('img')(({ theme }) => ({
    width: '50%',
    padding: theme.spacing(3)
}))

export const GridDetalhes = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
}))

export const TextInfo = styled(Typography)(({ theme }) => ({
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(4.5)
}))