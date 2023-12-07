
import { styled, Grid, Typography, Button} from '@mui/material'
import { RiCloseCircleFill } from 'react-icons/ri'
import { RxSpeakerLoud } from "react-icons/rx";

export const GridFechar = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
        display: "block"
    }
}));

export const FecharIcon = styled(RiCloseCircleFill)(({ theme }) => ({
    fontSize: theme.spacing(3),
    color: theme.palette.grey[500],
    right: 15,
    position: 'absolute',
    cursor: 'pointer'
}));

export const GridFlex = styled(Grid)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column'
}))

export const Text = styled(Typography)(({theme}) => ({
    padding: theme.spacing(3),
    fontSize: theme.spacing(3),
    fontWeight: 500
}))


export const Image = styled('img')(({theme}) => ({
    width: '100%',
    height: '100%'
}))