
import { styled, Grid, Typography} from '@mui/material'
import { RiCloseCircleFill } from 'react-icons/ri'

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
}))

export const Text = styled(Typography)(({theme}) => ({
    padding: theme.spacing(3),
    fontSize: theme.spacing(2.5)
}))