import { ModalResumoExplicativoProps } from "./ModalResumoExplicativo.types";
import { DialogContent, Dialog, Box, Grid } from '@mui/material'
import * as Styled from './ModalResumoExplicativo.styled'
import { useEffect, useRef, useState } from "react";

export function ModalResumoExplicativo({ open, handleClose }: ModalResumoExplicativoProps) {

    const [readText, setReadText] = useState(false);

    interface LeitorTextoProps {
        texto: string;
    }

    const LeitorTexto = ({ texto }: LeitorTextoProps) => {
        const speechSynthesis = window.speechSynthesis;
        const utterance = useRef(new SpeechSynthesisUtterance(texto));

        utterance.current.onend = () => {
            speechSynthesis.cancel();
        };

        useEffect(() => {
            if (!readText) {
                speechSynthesis.speak(utterance.current);
                setReadText(true)
            }
        }, [texto]);

        return null;
    };

    return (
        <Dialog open={open}>
            <Box>
                <DialogContent>
                    <Grid container>
                        <Styled.GridFechar>
                            <Styled.FecharIcon onClick={() =>{ handleClose(), speechSynthesis.cancel()}} />
                        </Styled.GridFechar>
                        <Styled.GridFlex>
                            <Styled.Text>Ela tinha uma reserva de frasco para diversas situações, como a da vez em que precisou preparar um remédio para uma garota que engoliu uma nuvem. O remédio foi tão forte que além da garota ter vomitado a nuvem, vomitou também uma chuva de granizo que furou o telhado das casas ao redor.</Styled.Text>
                            <Styled.IconLer onClick={() => setReadText(false)} />
                        </Styled.GridFlex>
                        <LeitorTexto texto={'Ela tinha uma reserva de frasco para diversas situações, como a da vez em que precisou preparar um remédio para uma garota que engoliu uma nuvem. O remédio foi tão forte que além da garota ter vomitado a nuvem, vomitou também uma chuva de granizo que furou o telhado das casas ao redor.'} />
                    </Grid>
                </DialogContent>
            </Box>
        </Dialog>
    )
}