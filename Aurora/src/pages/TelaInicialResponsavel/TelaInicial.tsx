import { Grid } from "@mui/material"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import * as Styled from './TelaInicial.styled'
import Chico from '../../assets/img/Chico.png'
import Zanzão from '../../assets/img/Zanzão.png'
import { useState } from "react"
import { ModalGrafico } from "./ModalGrafico"

export const TelaInicialResponsavel = () => {

    const [openGrafico, setOpenGrafico] = useState(false)
    const [perfil, setPerfil] = useState('')

    return (
        <Grid container>
            <Grid item xs={2}>
                <Sidebar />
            </Grid>
            <Grid item xs={10}>
                <Grid>
                    <Styled.Titulo>Bem vindo, Richard</Styled.Titulo>
                    <Styled.Texto>Acompanhe o desempenho individual dos seus filhos</Styled.Texto>
                </Grid>
                <Styled.Leituras>
                    <Grid item xs={6}>
                        <Styled.BoxLeitura>
                            <Styled.Image src={Chico} />
                            <Styled.Center>
                                <Styled.TituloBox>Raíssa Bespalec Daloia</Styled.TituloBox>
                                <Styled.TextoBox>Intermediário</Styled.TextoBox>
                                <Styled.GridButton>
                                    <Styled.ButtonLeitura onClick={() => {setOpenGrafico(true), setPerfil('raissa')}}>VISUALIZAR </Styled.ButtonLeitura>
                                </Styled.GridButton>
                            </Styled.Center>
                        </Styled.BoxLeitura>
                    </Grid>
                    <Grid item xs={6}>
                        <Styled.BoxLeitura>
                            <Styled.Image src={Zanzão} />
                            <Styled.Center>
                                <Styled.TituloBox>Pedro Nicolas Costa</Styled.TituloBox>
                                <Styled.TextoBox>Iniciante</Styled.TextoBox>
                                <Styled.GridButton>
                                    <Styled.ButtonLeitura onClick={() => {setOpenGrafico(true), setPerfil('pedro')}}>VISUALIZAR </Styled.ButtonLeitura>
                                </Styled.GridButton>
                            </Styled.Center>
                        </Styled.BoxLeitura>
                    </Grid>
                </Styled.Leituras>
                <Grid>
                    <Styled.Texto>Informações mensais</Styled.Texto>
                    <Styled.Leituras>
                        <Grid item xs={4}>
                            <Styled.CardInformacao>
                                <Styled.TituloBox>LIVROS LIDOS</Styled.TituloBox>
                                <Styled.IconBooks />
                                <Styled.TextoCard>10 livros lidos</Styled.TextoCard>
                            </Styled.CardInformacao>
                        </Grid>
                        <Grid item xs={4}>
                            <Styled.CardInformacao>
                                <Styled.TituloBox>HORAS LIDAS</Styled.TituloBox>
                                <Styled.IconTime />
                                <Styled.TextoCard>7 horas</Styled.TextoCard>
                            </Styled.CardInformacao>
                        </Grid>
                        <Grid item xs={4}>
                            <Styled.CardInformacao>
                                <Styled.TituloBox>GÊNERO FAVORITO</Styled.TituloBox>
                                <Styled.IconGender />
                                <Styled.TextoCard>Fantasia</Styled.TextoCard>
                            </Styled.CardInformacao>
                        </Grid>
                    </Styled.Leituras>
                </Grid>
            </Grid>

            <ModalGrafico perfil={perfil} open={openGrafico} handleClose={() => setOpenGrafico(false)}/>
        </Grid>
    )
}