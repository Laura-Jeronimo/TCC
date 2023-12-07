import { styled } from "@mui/material/styles";
import { Grid, ListItemIcon, Link, ListItemText } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import { IoLibraryOutline } from "react-icons/io5";
import { LuBookMarked } from "react-icons/lu";
import { GoPerson } from "react-icons/go"
import { SubMenuProps } from "./Sidebar.types";
import { IoExitOutline } from "react-icons/io5";

export const SidebarWrapper = styled("div")(({ theme }) => ({
    transition: "all 0.3s",
    position: "relative",
    width: "25%",
    backgroundImage: 'linear-gradient(100deg, #FF8213 -5.85%, #FE9E0D 109.55%)',
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: theme.spacing(0.25),
        boxShadow: `${theme.spacing(0.1875)} 0px ${theme.spacing(0.1875)} #0000001a`,
    },
}));

export const ItemListaTexto = styled(ListItemText)<SubMenuProps>(({ theme, isActive }) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",

    "& .MuiTypography-root": {
        color: isActive ? '#BF1304' : '#fff',
        fontSize: theme.spacing(2.5),
        marginTop: theme.spacing(1),
        fontWeight: isActive ? 800 : 0,
        cursor: "pointer",
    },
    "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        height: theme.spacing(4),
        width: isActive ? theme.spacing(0.5) : 0,
        background: '#BF1304',
        right: theme.spacing(-0.58)
    },
}));

export const GridLista = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    padding: `${theme.spacing(1.25)} ${theme.spacing(0.625)} ${theme.spacing(1.25)} ${theme.spacing(0.625)}`,
}));

export const GridLogo = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    padding: `${theme.spacing(1.25)} ${theme.spacing(0.625)} ${theme.spacing(1.25)} ${theme.spacing(0.625)}`,
}));

export const wrapperMainDiv = styled('div')(({ theme }) => ({
    display: 'flex',
    height: '100% !important',
    width: '80%',
    position: 'fixed',
}));

export const Icones = styled(ListItemIcon)({
    minWidth: "15%",
});

export const IconHome = styled(AiOutlineHome)(({theme}) => ({
    fontSize: theme.spacing(3.8),
    marginLeft: theme.spacing(1),
}))

export const IconLibrary = styled(IoLibraryOutline)(({theme}) => ({
    fontSize: theme.spacing(3.5),
    marginLeft: theme.spacing(1),
}))

export const IconBook = styled(LuBookMarked)(({theme}) => ({
    fontSize: theme.spacing(3.5),
    marginLeft: theme.spacing(1),
}))

export const IconProfile = styled(GoPerson)(({ theme }) => ({
    fontSize: theme.spacing(3.5),
    marginLeft: theme.spacing(1),
}))

export const IconExit = styled(IoExitOutline)(({theme}) => ({
    fontSize: theme.spacing(3.5),
    marginLeft: theme.spacing(1),
}))

