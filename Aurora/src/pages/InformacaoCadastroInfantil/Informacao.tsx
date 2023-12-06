
import * as Styled from "./Informacao.styled";
import { useNavigate } from "react-router-dom";

export function Informacao() {

    const navigate = useNavigate()

    return (
        <>
            <Styled.Container container>
                <Styled.BoxInformativo>
                    <Styled.GridCentralizacao>
                        <Styled.Seta onClick={() => navigate('/')} /> <Styled.Icon />
                    </Styled.GridCentralizacao>
                    &nbsp;
                    <Styled.Texto>O Aurora só permite o cadastro de crianças pelo perfil do responsável! Caso tenha interesse em criar uma conta para o seu filho, faça primeiro o seu cadastro e logo em seguida aparecerá a opção para realizar o do pequeno!</Styled.Texto>
                </Styled.BoxInformativo>
            </Styled.Container>
        </>
    );
};