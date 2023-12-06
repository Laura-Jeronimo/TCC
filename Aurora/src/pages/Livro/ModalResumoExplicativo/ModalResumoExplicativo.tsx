import { ModalResumoExplicativoProps } from "./ModalResumoExplicativo.types";
import { DialogContent, Dialog, Box, Grid } from '@mui/material'
import * as Styled from './ModalResumoExplicativo.styled'

export function ModalResumoExplicativo({ open, handleClose }: ModalResumoExplicativoProps) {
    return (
        <Dialog open={open}>
            <Box>
                <DialogContent>
                    <Grid container>
                        <Styled.GridFechar>
                            <Styled.FecharIcon onClick={() => handleClose()}/>
                        </Styled.GridFechar>
                        <Styled.GridFlex>
                            <Styled.Text>Ela tinha uma reserva de frasco para diversas situações, como a da vez em que precisou preparar um remédio para uma garota que engoliu uma nuvem. O remédio foi tão forte que além da garota ter vomitado a nuvem, vomitou também uma chuva de granizo que furou o telhado das casas ao redor.</Styled.Text>
                        </Styled.GridFlex>
                    </Grid>
                </DialogContent>
            </Box>
        </Dialog>
    )
}