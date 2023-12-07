import { Grid} from "@mui/material"
import * as Styled from './PerfilPai.styled'
import { Sidebar } from "../../components/Sidebar/Sidebar"
import Zanzao from '../../assets/img/Zanzão.png'
import Chico from '../../assets/img/Chico.png'

export const PerfilPai = () => {

    return (
        <Styled.MainDiv>
            <Sidebar />
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
        </Styled.MainDiv>
    )
}