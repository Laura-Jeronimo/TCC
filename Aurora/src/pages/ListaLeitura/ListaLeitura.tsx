import { Grid } from "@mui/material"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import * as Styled from './ListaLeitura.styled'
import BruxaeoCaldeirao from '../../assets/img/bruxaeocaldeirao.png'
import ChapeuzinhoAmarelo from '../../assets/img/ChapeuzinhoAmarelo.png'
import MagicoOz from '../../assets/img/magicodeoz.png'
import PeterPan from '../../assets/img/peterpan.png'
import Pinoquio from '../../assets/img/pinoquio.png'
import MeninoMaluquinho from '../../assets/img/MeninoMaluquinho.png'

export const ListaLeitura = () => {
    return (
        <Grid container>
            <Grid xs={2}>
                <Sidebar />
            </Grid>
            <Grid xs={10}>
                <Styled.Titulo>Lista de Leitura</Styled.Titulo>
                <Styled.GridIconeTexto>
                    <Styled.ReadingIcon /> <Styled.TitulosListas>Lendo</Styled.TitulosListas>
                </Styled.GridIconeTexto>
                <Styled.GridLeituras>
                    <Grid>
                        <Styled.Capa src={BruxaeoCaldeirao} />
                        <Styled.TituloLivros>A bruxa e o caldeirão</Styled.TituloLivros>
                        <Styled.TextoLivros>José Leon Machado</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={ChapeuzinhoAmarelo} />
                        <Styled.TituloLivros>Chapeuzinho Amarelo</Styled.TituloLivros>
                        <Styled.TextoLivros>Chico Buarque</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={MagicoOz} />
                        <Styled.TituloLivros>O Mágico de Oz</Styled.TituloLivros>
                        <Styled.TextoLivros>L. Frank Baum</Styled.TextoLivros>
                    </Grid>
                </Styled.GridLeituras>
                <Styled.GridIconeTexto>
                    <Styled.ToReadIcon /> <Styled.TitulosListas>Quero ler</Styled.TitulosListas>
                </Styled.GridIconeTexto>
                <Styled.GridLeituras>
                    <Grid>
                        <Styled.Capa src={Pinoquio} />
                        <Styled.TituloLivros>Pinóquio</Styled.TituloLivros>
                        <Styled.TextoLivros>Carlo Collodi</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={PeterPan} />
                        <Styled.TituloLivros>Peter Pan</Styled.TituloLivros>
                        <Styled.TextoLivros>J. M. Barrie</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={MeninoMaluquinho} />
                        <Styled.TituloLivros>O Menino Maluquinho</Styled.TituloLivros>
                        <Styled.TextoLivros>Ziraldo</Styled.TextoLivros>
                    </Grid>
                </Styled.GridLeituras>
                <Styled.GridIconeTexto>
                    <Styled.FavIcon /> <Styled.TitulosListas>Favoritos</Styled.TitulosListas>
                </Styled.GridIconeTexto>
                <Styled.GridLeituras>
                    <Styled.TextoAviso>POR AQUI ESTÁ VAZIO!</Styled.TextoAviso>
                </Styled.GridLeituras>
            </Grid>
        </Grid>
    )
}