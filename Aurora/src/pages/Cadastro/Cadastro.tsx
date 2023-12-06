
import { Grid } from "@mui/material";
import * as Styled from "./Cadastro.styled";
import Animais from '../../assets/img/animais-cadastro.png'
import { useNavigate } from "react-router-dom";

export function Cadastro() {

    const navigate = useNavigate()

    return (
        <>
            <Styled.Container container>
                <Styled.GridCentralizacao item xs={12} md={6} container>
                    <Styled.Seta onClick={() => navigate('/')} />
                    <Grid item xs={10} sm={8} md={9} lg={8} xl={6}>
                        <Styled.Titulo>CADASTRO</Styled.Titulo>
                        <form>

                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="name">{"Nome"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="nome"
                                        type="text"
                                        id="nome"
                                        placeholder={"Digite seu nome"}
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
                                        placeholder={"Digite seu e-mail"}
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>

                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="tel">{"Telefone"}</Styled.FormLabelGeneric>
                                    <Styled.InputTelefone
                                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                        guide={false}
                                        placeholderChar={'\u2000'}
                                        placeholder="Insira seu telefone"
                                        showMask
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
                                        placeholder="Digite sua senha"
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>

                            <Styled.GridBotao container>
                                <Styled.BotaoEnviar
                                    type="submit"
                                    color="primary"
                                    onClick={() => navigate('/cadastro/infantil')}
                                >
                                    CADASTRAR
                                </Styled.BotaoEnviar>
                            </Styled.GridBotao>

                        </form>
                        <Styled.Texto>Já possui conta? <Styled.LinkLogin underline="none" onClick={() => navigate('/login/responsavel')}>Faça login</Styled.LinkLogin></Styled.Texto>
                    </Grid>
                </Styled.GridCentralizacao>
                <Styled.CorFundo item md={6}>
                    <Styled.Imagem src={Animais} />
                </Styled.CorFundo>
            </Styled.Container>
        </>
    );
};