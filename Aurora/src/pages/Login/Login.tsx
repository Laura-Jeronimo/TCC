
import { Grid } from "@mui/material";
import * as Styled from "./Login.styled";
import Cabana from '../../assets/img/Cabanateste.png'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react'
import { toast } from 'react-toastify';

export function Login() {

    const navigate = useNavigate()
    const params = useParams()
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const usuarios = [
        ...(params.perfil === 'infantil' ? [{
            email: 'pedronicolas@email.com',
            senha: '123456'
        }, {
            email: 'raissadaloia@email.com',
            senha: '123456'
        }] : [{
            email: 'richarddutra110@gmail.com',
            senha: '123456'
        }]),
    ]

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const usuarioLogado = usuarios.find(
            usuario => usuario.email === email && usuario.senha === senha
        );

        if (usuarioLogado) {
            params.perfil === 'infantil' ? (email === 'pedronicolas@email.com' ? navigate('/home/infantil/iniciante') : navigate('/home/infantil/intermediario')) : navigate('/home/responsavel');
        } else {
            toast.error('Usuário inválido')
        }
    }

    return (
        <>
            <Styled.Container container>
                <Styled.GridCentralizacao item xs={12} md={6} container>
                    <Styled.Seta onClick={() => navigate('/')} />
                    <Grid item xs={10} sm={8} md={9} lg={8} xl={6}>
                        <Styled.Titulo>LOGIN</Styled.Titulo>
                        <form onSubmit={handleSubmit}>
                            <Grid item xs={12}>
                                <Styled.FormControlGeneric>
                                    <Styled.FormLabelGeneric htmlFor="email">{"E-mail"}</Styled.FormLabelGeneric>
                                    <Styled.InputTextGeneric
                                        name="email"
                                        type="text"
                                        id="email"
                                        placeholder={"Digite seu e-mail"}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                </Styled.FormControlGeneric>
                            </Grid>

                            <Styled.Texto underline="none"> Esqueceu sua senha? </Styled.Texto>

                            <Styled.GridBotao container>
                                <Styled.BotaoEnviar
                                    type="submit"
                                    color="primary"
                                >
                                    Entrar
                                </Styled.BotaoEnviar>
                            </Styled.GridBotao>

                        </form>
                        <Styled.TextoCadastro>Ainda não tem conta? <Styled.LinkCadastro underline="none" onClick={params.perfil == "responsavel" ? () => navigate('/cadastro') : () => navigate('/informacao-cadastro-infantil')}>Cadastre-se</Styled.LinkCadastro></Styled.TextoCadastro>
                    </Grid>
                </Styled.GridCentralizacao>
                <Styled.CorFundo item md={6}>
                    <Styled.Imagem src={Cabana} />
                </Styled.CorFundo>
            </Styled.Container>
        </>
    );
};