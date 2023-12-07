import { ModalGraficoProps } from "./ModalGrafico.types";
import { DialogContent, Dialog, Box, Grid } from '@mui/material'
import * as Styled from './ModalGrafico.styled'
import GraficoRaissa from '../../../assets/img/graficoRaissa.png'
import GraficoPedro from '../../../assets/img/graficoPedro.png'

export function ModalGrafico({ open, handleClose, perfil }: ModalGraficoProps) {
    return (
        <Dialog open={open}>
            <Box>
                <DialogContent>
                    <Grid container>
                        <Styled.GridFechar>
                            <Styled.FecharIcon onClick={() => { handleClose(), speechSynthesis.cancel() }} />
                        </Styled.GridFechar>
                        <Styled.GridFlex>
                            <Styled.Text>Lidos durante o ano</Styled.Text>
                            {perfil == 'raissa' &&
                                <Styled.Image src={GraficoRaissa} />
                            }
                            {perfil == 'pedro' &&
                                <Styled.Image src={GraficoPedro} />
                            }
                        </Styled.GridFlex>
                    </Grid>
                </DialogContent>
            </Box>
        </Dialog>
    )
}