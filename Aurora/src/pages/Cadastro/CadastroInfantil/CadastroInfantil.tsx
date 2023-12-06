
import { Grid } from "@mui/material";
import * as Styled from "./CadastroInfantil.styled";
import { useNavigate } from "react-router-dom";

export function CadastroInfantil() {

    const navigate = useNavigate()

    return (
        <>
            <Styled.Container container>
                <Styled.GridCentralizacao item xs={12} md={6} container>
                    <Styled.Seta onClick={() => navigate('/')} />
                    <Grid item xs={10} sm={8} md={9} lg={8} xl={6}>
                        <Styled.Titulo>OLÁ, RESPONSÁVEL</Styled.Titulo>
                        <Styled.Texto>Por favor, preencha as informações abaixo para cadastrar o seu filho</Styled.Texto>
                        <form>

                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="name">{"Nome"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="nome"
                                        type="text"
                                        id="nome"
                                        placeholder={"Digite o nome da criança"}
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>

                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="email">{"E-mail"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="email"
                                        type="text"
                                        id="email"
                                        placeholder={"Digite o email para acesso"}
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>

                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="date">{"Data de nascimento"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="dataNascimento"
                                        type="text"
                                        id="dataNascimento"
                                        placeholder={"Informe a data de nascimento"}
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>

                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="password">Senha</Styled.FormLabelGeneric>
                                    <Styled.InputPasswordGeneric
                                        name="password"
                                        id="password"
                                        type="password"
                                        placeholder="Informe a senha para acesso"
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>

                            <Grid item xs={12}>
                                <Styled.TituloCheckBox>Nível de leitura</Styled.TituloCheckBox>
                                <Styled.DivisaoNivel>
                                    <Styled.DivCheckbox>
                                        <Styled.CheckBox name="NivelLeitura" checked={false} />
                                        <Styled.Legenda>Iniciante</Styled.Legenda>
                                    </Styled.DivCheckbox>
                                    <Styled.DivCheckbox>
                                        <Styled.CheckBox name="NivelLeitura" checked={false} />
                                        <Styled.Legenda>Intermediário</Styled.Legenda>
                                    </Styled.DivCheckbox>
                                    <Styled.DivCheckbox>
                                        <Styled.CheckBox name="NivelLeitura" checked={false} />
                                        <Styled.Legenda>Avançado</Styled.Legenda>
                                    </Styled.DivCheckbox>
                                </Styled.DivisaoNivel>
                            </Grid>

                            <Styled.LinkCadastro underline="none">+ Cadastrar outro</Styled.LinkCadastro>

                            <Styled.GridBotao container>
                                <Styled.BotaoEnviar
                                    type="submit"
                                    color="primary"
                                >
                                    CADASTRAR
                                </Styled.BotaoEnviar>
                            </Styled.GridBotao>

                        </form>
                    </Grid>
                </Styled.GridCentralizacao>
            </Styled.Container>
        </>
    );
};