
import { Grid } from "@mui/material";
import * as Styled from "./CadastroInfantil.styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify'

export function CadastroInfantil() {

    const navigate = useNavigate()

    const [isCheckedIniciante, setIsCheckedIniciante] = useState(false);
    const [isCheckedIntermediario, setIsCheckedIntermediario] = useState(false);
    const [isCheckedAvancado, setIsCheckedAvancado] = useState(false);

    const submit = () => {
        navigate('/')
        toast.success('Usuários cadastrados com sucesso! Agora você já pode logar nas respectivas contas')
    }

    const [forms, setForms] = useState([{
        nome: '',
        email: '',
        dataNascimento: '',
        senha: '',
        nivelLeitura: {
            iniciante: false,
            intermediario: false,
            avancado: false
        }
    }]);

    const addForm = () => {
        setForms([...forms, {
            nome: '',
            email: '',
            dataNascimento: '',
            senha: '',
            nivelLeitura: {
                iniciante: false,
                intermediario: false,
                avancado: false
            }
        }]);
    };

    return (
        <>
            <Styled.Container container>
                <Styled.GridCentralizacao item xs={12} md={6} container>
                    <Styled.Seta onClick={() => navigate('/')} />
                    <Grid item xs={10} sm={8} md={9} lg={8} xl={6}>
                        <Styled.Titulo>OLÁ, RESPONSÁVEL</Styled.Titulo>
                        <Styled.Texto>Por favor, preencha as informações abaixo para cadastrar o seu filho</Styled.Texto>
                        {forms.map((_form, index) => (
                            <form key={index}>
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
                                        <Styled.InputData
                                            mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
                                            guide={false}
                                            placeholderChar={'\u2000'}
                                            placeholder="Informe a data de nascimento"
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
                                            placeholder="Informe a senha para acesso"
                                        />
                                    </Styled.FormControlGeneric>
                                </Grid>

                                <Grid item xs={12}>
                                    <Styled.TituloCheckBox>Nível de leitura</Styled.TituloCheckBox>
                                    <Styled.DivisaoNivel>
                                        <Styled.DivCheckbox>
                                            <Styled.CheckBox sx={{
                                                color: '#FF8213',
                                                '&.Mui-checked': {
                                                    color: '#FF8213',
                                                },
                                            }} name="NivelLeitura"
                                                checked={isCheckedIniciante}
                                                onChange={() => setIsCheckedIniciante(!isCheckedIniciante)}
                                            />
                                            <Styled.Legenda>Iniciante</Styled.Legenda>
                                        </Styled.DivCheckbox>
                                        <Styled.DivCheckbox>
                                            <Styled.CheckBox sx={{
                                                color: '#FF8213',
                                                '&.Mui-checked': {
                                                    color: '#FF8213',
                                                },
                                            }} name="NivelLeitura"
                                                checked={isCheckedIntermediario}
                                                onChange={() => setIsCheckedIntermediario(!isCheckedIntermediario)}
                                            />
                                            <Styled.Legenda>Intermediário</Styled.Legenda>
                                        </Styled.DivCheckbox>
                                        <Styled.DivCheckbox>
                                            <Styled.CheckBox sx={{
                                                color: '#FF8213',
                                                '&.Mui-checked': {
                                                    color: '#FF8213',
                                                },
                                            }} name="NivelLeitura"
                                                checked={isCheckedAvancado}
                                                onChange={() => setIsCheckedAvancado(!isCheckedAvancado)} />
                                            <Styled.Legenda>Avançado</Styled.Legenda>
                                        </Styled.DivCheckbox>
                                    </Styled.DivisaoNivel>
                                </Grid>
                            </form>
                        ))}
                        <form>

                            <Styled.LinkCadastro onClick={addForm} underline="none">+ Cadastrar outro</Styled.LinkCadastro>

                            <Styled.GridBotao container>
                                <Styled.BotaoEnviar
                                    type="submit"
                                    color="primary"
                                    onClick={submit}
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