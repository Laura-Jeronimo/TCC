import { Grid, styled, Typography, Button} from "@mui/material";
import { MdNavigateNext, MdNavigateBefore  } from "react-icons/md";
import { OpcoesDivProps, OpcoesProps } from "./Livro.types";
import { IoMdArrowBack } from "react-icons/io";


export const GridContainer = styled('body')({
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'row',
    background: '#FBD4B1',
    height: '100%',
    width: '100%'
});

export const DivLivro = styled('div')(({
    width: '550px',
    height: '660px',
    position: 'relative',
    transitionDuration: '1.5s',
    perspective: 1500,
    marginLeft: '500px'
}));

export const Input = styled('input')({
    display: 'none',
});

export const Cover = styled('div')({
    background: '#F0A416',
    width: '100%',
    height: '100%',
    borderRadius: '0 15px 15px 0',
    boxShadow: '0 0 5px rgb(41, 41, 41)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transformOrigin: 'center left',
    position: 'absolute',
    zIndex: 12,
});

export const LabelCover = styled('label')({
    width: '100%',
    height: '100%',
    cursor: 'pointer',
})

export const BackCover = styled('div')({
    background: '#F0A416',
    width: '100%',
    height: '100%',
    borderRadius: '0 15px 15px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transformOrigin: 'center left',
    position: 'relative',
    zIndex: -2,
})

export const DivPag = styled('div')({
    position: 'absolute',
    background: '#fff',
    width: '530px',
    height: '630px',
    borderRadius: '0 15px 15px 0',
    marginTop: '10px',
    transformOrigin: 'left',
    transformStyle: 'preserve-3d',
    transform: 'rotateY(0deg)',
    transitionDuration: '2s',
})

export const FrontPage = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    boxSizing: 'border-box',
    padding: '1rem'
})

export const BackPage = styled('div')({
    transform: 'rotateY(180deg)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    zIndex: 15
})

export const LabelNext = styled('label')({
    position: 'absolute',
    bottom: '1rem',
    cursor: 'pointer',
    right: '1rem'
})

export const LabelPrev = styled('label')({
    position: 'absolute',
    bottom: '1rem',
    cursor: 'pointer',
    left: '1rem'
})

export const NextIcon = styled(MdNavigateNext)(({theme}) => ({
    fontSize: theme.spacing(4)
}))

export const PrevIcon = styled(MdNavigateBefore)(({theme}) => ({
    fontSize: theme.spacing(4)
}))

export const Titulo = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(5),
    textAlign: 'center',
    fontWeight: 800
}))

export const Text = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(2.5),
    textAlign: 'center'
}))

export const Paragrafo = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(2.5),
    textAlign: 'justify'
}))

export const Image = styled('img')({
    width: '100%',
    height: '100%',
    borderRadius: '0 15px 15px 0'
})

export const DivImagem = styled('div')({
    position: 'absolute',
    display: 'block',
    zIndex: 5,
    top: '50%',
    left: '50%',
    transform: 'translate(-5%, -90%)',
    textAlign: 'center'
})

export const DivImagemPadeiro = styled('div')({
    position: 'absolute',
    display: 'block',
    zIndex: 5,
    top: '50%',
    left: '50%',
    transform: 'translate(-90%, -40%)',
    textAlign: 'center'
})

export const ButtonFechar = styled(Button)(({theme}) => ({
    background: '#FE9E0D',
    color: theme.palette.secondary.contrastText,

    '&:hover':{
        background: '#f27405'
    }
}))

export const ImgTexto = styled('img')({
    width: '80%',
    height: '80%'
})

export const OpcoesDiv = styled("div")<OpcoesDivProps>(({ isHeight = false, theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1.25),
    justifyContent: "space-between",
    ...(isHeight && {
        height: theme.spacing(6.25)
    })
}));

export const Opcoes = styled("p")<OpcoesProps>(({ type, ativo = false, theme }) => ({
    fontSize: theme.spacing(2),
    width: "100%",
    textAlign: "center",
    cursor: "pointer",
    fontFamily: 'Josefin Sans',
    ...(type === "normal" && {
        color: theme.palette.grey[800] 
    }),
    ...(type === "erro" && {
        color: theme.palette.error.main
    }),
    ...(ativo && {
        color: theme.palette.primary.main
    })
}));

export const GridVoltar = styled(Grid)(({theme}) => ({
    marginLeft: theme.spacing(3),
    height: '90%',
}))

export const Seta = styled(IoMdArrowBack)(({theme}) => ({
    fontSize: '50px',
    color: '#000',
    cursor: 'pointer',
}))