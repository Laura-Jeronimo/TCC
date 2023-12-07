
import { styled, Grid, Typography} from '@mui/material'
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

export const GridFlex = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column'
})

export const Text = styled(Typography)(({theme}) => ({
    padding: theme.spacing(3),
    fontSize: theme.spacing(2.5)
}))

export const IconLer = styled(RxSpeakerLoud)(({theme}) => ({
    cursor: 'pointer',
    fontSize: theme.spacing(2.5),
    color: '#FF8213'
}))