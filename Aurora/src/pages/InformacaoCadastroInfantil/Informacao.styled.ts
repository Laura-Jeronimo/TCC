import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TelaInicial from '../../assets/img/Telainicial.png';
import { IoIosInformationCircle } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

export const Container = styled(Grid)({
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${TelaInicial})`,
});

export const GridCentralizacao = styled(Grid)({
    textAlign: 'left'
});

export const BoxInformativo = styled(Box)(({theme}) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(3),
    width: "30%"}));

export const Texto = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(3)
}));

export const Icon = styled(IoIosInformationCircle)(({theme}) => ({
    color: '#F27405',
    fontSize: theme.spacing(5),
}));

export const Seta = styled(IoMdArrowBack)(({theme}) => ({
    fontSize: theme.spacing(4),
    cursor: 'pointer'
}));