import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

export const StyledLayoutContainer = styled(Container)(({ }) => ({
    height: '100%',
    width: '100% !important',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100% !important',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',

    '&:_content': {
        width: '100%',
        overflowY: 'auto',
    },   
}));