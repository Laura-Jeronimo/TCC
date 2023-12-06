import { Stack } from "@mui/material";
import * as Styled from "./EscolherPerfil.styled"
import MonitorIcon from '../../assets/img/Monitor.png';
import CriancaIcon from '../../assets/img/Criança.png';
import Aurora from '../../assets/Aurora.svg'
import { useNavigate } from "react-router-dom";

export function EscolherPerfil() {

    const navigate = useNavigate()

    return (
        <Styled.GridContainer>
            <Styled.AuroraLogo src={Aurora}/>
            <Styled.Titulo>Seja bem vindo!</Styled.Titulo>
            <Stack direction="row" spacing={{ xs: 1, sm: 3 }}>
                <Styled.Item>
                    <Styled.TituloCard>Para os pequenos!</Styled.TituloCard>
                    <br /><br />
                    <Styled.Img src={CriancaIcon}/>
                    <br /><br />
                    <Styled.ButtonEscolha onClick={() => navigate("/login/infantil")}>Perfil infantil</Styled.ButtonEscolha>
                </Styled.Item>
                <Styled.Item>
                    <Styled.TituloCard>Para os papais!</Styled.TituloCard>
                    <br /><br />
                    <Styled.Img src={MonitorIcon}/>
                    <br /><br />
                    <Styled.ButtonEscolha onClick={() => navigate("/login/responsavel")}>Perfil responsável</Styled.ButtonEscolha>
                </Styled.Item>
            </Stack>
        </Styled.GridContainer>
    )
}