import { Grid } from "@mui/material"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import * as Styled from './TelaInicial.styled'
import { useParams } from "react-router-dom"
import Sol from '../../assets/img/Sol.png'
import BruxaCaldeirao from '../../assets/img/bruxaeocaldeirao.png'
import MeninoMaluquinho from '../../assets/img/MeninoMaluquinho.png'
import Pinoquio from '../../assets/img/pinoquio.png'
import BrancaNeve from '../../assets/img/brancadeneve.png'
import Bambi from '../../assets/img/bambi.png'
import ChapeuzinhoVermelho from '../../assets/img/chapeuzinhovermelho.png'
import MagicoOz from '../../assets/img/magicodeoz.png'
import PeterPan from '../../assets/img/peterpan.png'
import Alice from '../../assets/img/alicenopaisdasmaravilhas.png'
import PequenoPrincipe from '../../assets/img/opequenoprincipe.png'
import PercyJackson from '../../assets/img/percyjackson.png'
import Extraordinario from '../../assets/img/extraordinario.png'
import HarryPotter from '../../assets/img/harrypotter.png'
import Malala from '../../assets/img/malala.png'
import IrmaosGrimm from '../../assets/img/irmaosgrimm.png'
import JardimSecreto from '../../assets/img/jardimsecreto.png'
import { useNavigate } from "react-router-dom"

export const TelaInicial = () => {

    const params = useParams()
    const navigate = useNavigate()

    return (
        <Grid container>
            {params.perfil === 'infantil' && params.nivel === "iniciante" &&
                <Grid container>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10}>
                        <Styled.Header>
                            <Styled.IconSol src={Sol} />
                            <Grid>
                                <Styled.Titulo>Bem vindo, Pedro!</Styled.Titulo>
                                <Styled.Texto>Você está no salão principal do Aurora, aqui você escolhe qual será a sua próxima aventura!</Styled.Texto>
                            </Grid>
                        </Styled.Header>
                        <Styled.Leituras>
                            <Grid item xs={6}>
                                <Styled.TituloLeituras>Continue de onde parou</Styled.TituloLeituras>
                                <Styled.TextoLeituras>Retome sua última leitura</Styled.TextoLeituras>
                                <Styled.BoxLeitura>
                                    <Styled.Capa src={BruxaCaldeirao} />
                                    <Grid>
                                        <Styled.TituloBox>A Bruxa e o Caldeirão</Styled.TituloBox>
                                        <Styled.TextoBox>José Leon Machado</Styled.TextoBox>
                                        <Styled.GridButton>
                                            <Styled.ButtonLeitura onClick={() => navigate('/livro')}>CONTINUAR <Styled.IconPlay /></Styled.ButtonLeitura>
                                        </Styled.GridButton>
                                    </Grid>
                                </Styled.BoxLeitura>
                            </Grid>
                            <Grid item xs={6}>
                                <Styled.TituloLeituras>Recomendação do dia</Styled.TituloLeituras>
                                <Styled.TextoLeituras>Achamos que você pudesse gostar de conhecer uma nova história!</Styled.TextoLeituras>
                                <Styled.BoxLeitura>
                                    <Styled.Capa src={MeninoMaluquinho} />
                                    <Grid>
                                        <Styled.TituloBox>O Menino Maluquinho</Styled.TituloBox>
                                        <Styled.TextoBox>Ziraldo</Styled.TextoBox>
                                        <Styled.GridButton>
                                            <Styled.ButtonLeitura>COMEÇAR <Styled.IconPlay /></Styled.ButtonLeitura>
                                        </Styled.GridButton>
                                    </Grid>
                                </Styled.BoxLeitura>
                            </Grid>
                        </Styled.Leituras>
                        <Styled.Leituras>
                            <Grid>
                                <Styled.TituloLeituras>Contos clássicos</Styled.TituloLeituras>
                                <Styled.GridLivros>
                                    <Grid>
                                        <Styled.CapaLivros src={Pinoquio} />
                                        <Styled.TituloLivros>Pinóquio</Styled.TituloLivros>
                                        <Styled.TextoLivros>Carlo Collodi</Styled.TextoLivros>
                                    </Grid>
                                    <Grid>
                                        <Styled.CapaLivros src={BrancaNeve} />
                                        <Styled.TituloLivros>Branca de Neve</Styled.TituloLivros>
                                        <Styled.TextoLivros>Irmãos Grimm</Styled.TextoLivros>
                                    </Grid>
                                    <Grid>
                                        <Styled.CapaLivros src={Bambi} />
                                        <Styled.TituloLivros>Bambi</Styled.TituloLivros>
                                        <Styled.TextoLivros>Felix Salten</Styled.TextoLivros>
                                    </Grid>
                                    <Grid>
                                        <Styled.CapaLivros src={ChapeuzinhoVermelho} />
                                        <Styled.TituloLivros>Chapeuzinho Vermelho</Styled.TituloLivros>
                                        <Styled.TextoLivros>Charles Perrault</Styled.TextoLivros>
                                    </Grid>
                                    <Grid >
                                        <Styled.CapaLivros src={MagicoOz} />
                                        <Styled.TituloLivros>O mágico de Oz</Styled.TituloLivros>
                                        <Styled.TextoLivros>L. Frank Baum</Styled.TextoLivros>
                                    </Grid>
                                    <Grid >
                                        <Styled.CapaLivros src={PeterPan} />
                                        <Styled.TituloLivros>Peter Pan</Styled.TituloLivros>
                                        <Styled.TextoLivros>J. M. Barrie</Styled.TextoLivros>
                                    </Grid>

                                    <Grid>
                                        <Styled.Seta />
                                    </Grid>
                                </Styled.GridLivros>
                            </Grid>
                        </Styled.Leituras>
                    </Grid>

                </Grid>
            }
            {params.perfil === 'infantil' && params.nivel === "intermediario" &&
                <Grid container>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10}>
                        <Styled.Header>
                            <Styled.IconSol src={Sol} />
                            <Grid>
                                <Styled.Titulo>Bem vinda, Raíssa!</Styled.Titulo>
                                <Styled.Texto>Você está no salão principal do Aurora, aqui você escolhe qual será a sua próxima aventura!</Styled.Texto>
                            </Grid>
                        </Styled.Header>
                        <Styled.Leituras>
                            <Grid item xs={6}>
                                <Styled.TituloLeituras>Continue de onde parou</Styled.TituloLeituras>
                                <Styled.TextoLeituras>Retome sua última leitura</Styled.TextoLeituras>
                                <Styled.BoxLeitura>
                                    <Styled.Capa src={Alice} />
                                    <Grid>
                                        <Styled.TituloBox>Alice no país das maravilhas</Styled.TituloBox>
                                        <Styled.TextoBox>Lewis Carrol</Styled.TextoBox>
                                        <Styled.GridButton>
                                            <Styled.ButtonLeitura>CONTINUAR <Styled.IconPlay /></Styled.ButtonLeitura>
                                        </Styled.GridButton>
                                    </Grid>
                                </Styled.BoxLeitura>
                            </Grid>
                            <Grid item xs={6}>
                                <Styled.TituloLeituras>Recomendação do dia</Styled.TituloLeituras>
                                <Styled.TextoLeituras>Achamos que você pudesse gostar de conhecer uma nova história!</Styled.TextoLeituras>
                                <Styled.BoxLeitura>
                                    <Styled.Capa src={PequenoPrincipe} />
                                    <Grid>
                                        <Styled.TituloBox>O Pequeno Príncipe</Styled.TituloBox>
                                        <Styled.TextoBox>Antoine de Saint-Exupéry </Styled.TextoBox>
                                        <Styled.GridButton>
                                            <Styled.ButtonLeitura>COMEÇAR <Styled.IconPlay /></Styled.ButtonLeitura>
                                        </Styled.GridButton>
                                    </Grid>
                                </Styled.BoxLeitura>
                            </Grid>
                        </Styled.Leituras>
                        <Styled.Leituras>
                            <Grid>
                                <Styled.TituloLeituras>Descubra novos mundos!</Styled.TituloLeituras>
                                <Styled.GridLivros>
                                    <Grid>
                                        <Styled.CapaLivros src={PercyJackson} />
                                        <Styled.TituloLivros>Percy Jackson</Styled.TituloLivros>
                                        <Styled.TextoLivros>Rick Riordan</Styled.TextoLivros>
                                    </Grid>
                                    <Grid>
                                        <Styled.CapaLivros src={Extraordinario} />
                                        <Styled.TituloLivros>O Extraordinário</Styled.TituloLivros>
                                        <Styled.TextoLivros>R. J. Palacio</Styled.TextoLivros>
                                    </Grid>
                                    <Grid>
                                        <Styled.CapaLivros src={HarryPotter} />
                                        <Styled.TituloLivros>Harry Potter</Styled.TituloLivros>
                                        <Styled.TextoLivros>J. K. Rowling</Styled.TextoLivros>
                                    </Grid>
                                    <Grid>
                                        <Styled.CapaLivros src={Malala} />
                                        <Styled.TituloLivros>Malala</Styled.TituloLivros>
                                        <Styled.TextoLivros>Adriana Carranca</Styled.TextoLivros>
                                    </Grid>
                                    <Grid >
                                        <Styled.CapaLivros src={IrmaosGrimm} />
                                        <Styled.TituloLivros>Contos dos Irmãos Grimm</Styled.TituloLivros>
                                        <Styled.TextoLivros>Irmãos Grimm </Styled.TextoLivros>
                                    </Grid>
                                    <Grid >
                                        <Styled.CapaLivros src={JardimSecreto} />
                                        <Styled.TituloLivros>O Jardim Secreto</Styled.TituloLivros>
                                        <Styled.TextoLivros>Frances Hodgson Bernett</Styled.TextoLivros>
                                    </Grid>

                                    <Grid>
                                        <Styled.Seta />
                                    </Grid>
                                </Styled.GridLivros>
                            </Grid>
                        </Styled.Leituras>
                    </Grid>

                </Grid>
            }
        </Grid>
    )
}