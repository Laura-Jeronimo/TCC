import { Box, Grid, IconButton, InputAdornment, Typography } from "@mui/material"
import * as Styled from './Perfil.styled'
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { useParams } from "react-router-dom"
import Zanzao from '../../assets/img/Zanzão.png'
import Chico from '../../assets/img/Chico.png'

export const Perfil = () => {

    const params = useParams()

    return (
        <Styled.MainDiv>
            <Sidebar />
            {params.perfil === 'infantil' &&
                <Styled.Content>
                    <Styled.Titulo>MEU PERFIL</Styled.Titulo>
                    <Styled.GridComponents container>
                        <Grid>
                            <Styled.Texto>Bom dia, {params.nivel === 'iniciante' ? `Pedro` : 'Raíssa'}</Styled.Texto>
                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="name"> {"Nome"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="nome"
                                        type="text"
                                        id="nome"
                                        placeholder={params.nivel === 'iniciante' ? `Pedro Nicolas Costa` : 'Raíssa Bespalec Daloia'}
                                        disabled
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>
                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="name"> {"Responsável"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="nome"
                                        type="text"
                                        id="nome"
                                        placeholder="Richard Dutra Mendes"
                                        disabled
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>
                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="email">{"Email"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="email"
                                        type="text"
                                        id="email"
                                        placeholder={params.nivel === 'iniciante' ? "pedronicolas@email.com" : "raissadaloia@email.com"}
                                        disabled
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>
                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="name">{"Idade"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="nome"
                                        type="text"
                                        id="nome"
                                        placeholder={params.nivel === 'iniciante' ? "6 anos" : "11 anos"}
                                        disabled
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>
                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="name">{"Nível de leitura"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="nome"
                                        type="text"
                                        id="nome"
                                        placeholder={params.nivel === 'iniciante' ? "Iniciante" : "Intermediário"}
                                        disabled
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>
                        </Grid>
                        <Styled.GridInfoLivros>
                            <Styled.TextoBox>Favoritos</Styled.TextoBox>
                            <Styled.BoxFavoritos>
                                <Typography>Nenhum livro marcado como favorito ainda!</Typography>
                            </Styled.BoxFavoritos>
                            <br></br>
                            <Styled.TextoBox>Últimos livros lidos</Styled.TextoBox>
                            <Styled.BoxUltimosLidos>
                                <Typography>Nenhum livro lido por enquanto!</Typography>
                            </Styled.BoxUltimosLidos>
                        </Styled.GridInfoLivros>
                    </Styled.GridComponents>
                </Styled.Content>
            }
            {params.perfil === 'responsavel' &&
                <Styled.Content>
                    <Styled.Titulo>MEU PERFIL</Styled.Titulo>
                    <Styled.GridComponents container>
                        <Grid>
                            <Styled.TextoResponsavel>Bom dia, Richard</Styled.TextoResponsavel>
                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="name"> {"Nome"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="nome"
                                        type="text"
                                        id="nome"
                                        placeholder={`Richard Dutra Mendes`}
                                        disabled
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>
                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="email">{"Email"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="email"
                                        type="text"
                                        id="email"
                                        placeholder="richarddutra110@gmail.com"
                                        disabled
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>
                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="name">{"Telefone"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="nome"
                                        type="text"
                                        id="nome"
                                        placeholder="(11) 91234-5678"
                                        disabled
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>
                        </Grid>
                        <Styled.GridInfoFilhos>
                            <Styled.TextoBox>Filhos cadastrados</Styled.TextoBox>
                            <Styled.BoxFilho>
                                <Styled.GridDetalhes>
                                    <Styled.ImgPerfil src={Zanzao} />
                                    <Styled.TextInfo>Pedro Costa</Styled.TextInfo>
                                    <Styled.TextInfo>Iniciante</Styled.TextInfo>
                                    <Styled.TextInfo>0 lidos</Styled.TextInfo>
                                </Styled.GridDetalhes>
                            </Styled.BoxFilho>
                            <Styled.BoxFilho>
                                <Styled.GridDetalhes>
                                    <Styled.ImgPerfil src={Chico} />
                                    <Styled.TextInfo>Raíssa Daloia</Styled.TextInfo>
                                    <Styled.TextInfo>Intermediário</Styled.TextInfo>
                                    <Styled.TextInfo>10 lidos</Styled.TextInfo>
                                </Styled.GridDetalhes>
                            </Styled.BoxFilho>
                        </Styled.GridInfoFilhos>
                    </Styled.GridComponents>
                </Styled.Content>
            }
        </Styled.MainDiv>
    )
}