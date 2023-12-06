import { Button, Checkbox, FormControl, FormLabel, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IoMdArrowBack } from "react-icons/io";

export const Container = styled(Grid)({
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute'
});


export const Seta = styled(IoMdArrowBack)(({theme}) => ({
    fontSize: theme.spacing(3),
    marginTop: theme.spacing(1)
}));

export const GridCentralizacao = styled(Grid)({
    justifyContent: "center"
});

export const GridLogo = styled(Grid)({
    display: "flex",
    justifyContent: "center"
});


export const Titulo = styled(Typography)({
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 900,
});

export const FormControlGeneric = styled(FormControl)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(0.625),
}));

export const FormLabelGeneric = styled(FormLabel)(({ theme }) => ({
    fontWeight: 700,
    color: theme.palette.grey[800],
    fontSize: theme.spacing(2.5),
    marginTop: theme.spacing(2)
}));

export const TituloCheckBox = styled(Typography)(({theme}) => ({
    fontWeight: 700,
    color: theme.palette.grey[800],
    fontSize: theme.spacing(2.5),
    marginTop: theme.spacing(2)
}))

export const InputTextGeneric = styled('input')(({ theme }) => ({
    width: '100%',
    height: '100%',
    borderRadius: "16px",
    backgroundColor: 'rgba(240, 237, 255, 0.80)',
    border: 'none',
    fontFamily: 'Josefin Sans',
    padding: theme.spacing(2)
}));

export const InputPasswordGeneric = styled('input')(({ theme }) => ({
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: "16px",
    backgroundColor: 'rgba(240, 237, 255, 0.80)',
    fontFamily: 'Josefin Sans',
    padding: theme.spacing(2)
}));

export const BotaoEnviar = styled(Button)(({ theme }) => ({
    width: '30%',
    height: '20%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundImage: 'linear-gradient(100deg, #FF8213 -5.85%, #FE9E0D 109.55%)',
    color: '#FFF',
    fontWeight: 900,
    borderRadius: theme.spacing(3)
}));

export const GridBotao = styled(Grid)(({ theme }) => ({
    justifyContent: 'center'
}));

export const Texto = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    fontWeight: 500,
    textAlign: 'center'
}));

export const LinkCadastro = styled(Link)(({ theme }) => ({
    color: '#000',
    fontSize: theme.spacing(2),
    fontWeight: 800,
    cursor: 'pointer',
    fontFamily: 'Josefin Sans',
}));

export const CorFundo = styled(Grid)(({ theme }) => ({
    height: "100%",
    backgroundImage: 'linear-gradient(218deg, #FF8213 -5.84%, #FE9E0D 106.73%)',
    [theme.breakpoints.down("md")]: {
        display: "none"
    },
    [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export const Imagem = styled("img")(({ theme }) => ({
    height: "90%",

    [theme.breakpoints.down("lg")]: {
        height: "70%",
    },
}));

export const DivisaoNivel = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(0.5),
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
 }));

 export const DivCheckbox = styled(Grid)(({theme}) => ({
    display: 'flex'
 }));

 export const CheckBox = styled(Checkbox)({
    padding: 0
 });

 export const Legenda = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2.3),
    marginLeft: theme.spacing(0.4),
    marginTop: theme.spacing(0.2),
    fontWeight: 500
 }));
 