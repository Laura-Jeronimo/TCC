import { Button, FormControl, FormLabel, Grid, Link, Typography } from "@mui/material";
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
    marginTop: theme.spacing(1),
    cursor: 'pointer'
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
    fontSize: '25px',
    fontWeight: 1000,
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
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
}));

export const BotaoEnviar = styled(Button)(({ theme }) => ({
    width: '30%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    backgroundImage: 'linear-gradient(100deg, #FF8213 -5.85%, #FE9E0D 109.55%)',
    color: '#FFF',
    fontWeight: 900,
    borderRadius: theme.spacing(3)
}));

export const GridBotao = styled(Grid)({
    justifyContent: 'center'
});

export const Texto = styled(Link)(({ theme }) => ({
    color: "black",
    fontSize: theme.spacing(2),
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'Josefin Sans'
}));

export const TextoCadastro = styled(Typography)(({ theme }) => ({
    color: "#730202",
    fontSize: theme.spacing(2),
    fontWeight: 500,
    textAlign: 'center'
}));

export const LinkCadastro = styled(Link)(({ theme }) => ({
    color: "#730202",
    fontSize: theme.spacing(2),
    fontWeight: 800,
    cursor: 'pointer',
    fontFamily: 'Josefin Sans'
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
    height: "70%",

    [theme.breakpoints.down("lg")]: {
        height: "50%",
    },
}));