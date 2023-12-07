import * as Styled from './Sidebar.styled'
import { Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Aurora from '../../assets/img/Aurora.png';
import Zanzão from '../../assets/img/Zanzão.png'
import Chico from '../../assets/img/Chico.png'

export const Sidebar = () => {

    const navigate = useNavigate()
    const params = useParams()

    console.log(params)

    return (
        <Styled.wrapperMainDiv>
            <Styled.SidebarWrapper >
                <Grid>
                    <Styled.GridLogo >
                        <img src={Aurora} />
                    </Styled.GridLogo>
                </Grid>
                {params.perfil === 'infantil' && params.nivel === 'iniciante' &&
                    <Grid>
                        <Styled.GridLogo>
                            <img src={Zanzão} />
                        </Styled.GridLogo>
                    </Grid>
                }
                {params.perfil === 'infantil' && params.nivel === 'intermediario' &&
                    <Grid>
                        <Styled.GridLogo>
                            <img src={Chico} />
                        </Styled.GridLogo>
                    </Grid>
                }
                <Styled.GridLista >
                    <Styled.Icones>
                        <Styled.IconHome color={location.pathname === "/home/infantil/iniciante" || location.pathname === "/home/infantil/intermediario" || location.pathname === "/home/responsavel" ? 'BF1304' : '#fff'} />
                    </Styled.Icones>
                    <Styled.ItemListaTexto isActive={location.pathname === "/home/infantil/iniciante" || location.pathname === "/home/infantil/intermediario" || location.pathname === "/home/responsavel"}
                        onClick={() => { params.perfil === 'infantil' ? (params.nivel === 'iniciante' ? navigate("/home/infantil/iniciante") : navigate("/home/infantil/intermediario")) : navigate("/home/responsavel") }}
                        primary="Home" />
                </Styled.GridLista>
                {params.perfil === 'infantil' &&
                    <Styled.GridLista >
                        <Styled.Icones>
                            <Styled.IconLibrary color={location.pathname === "/biblioteca/infantil/iniciante" || location.pathname === "/biblioteca/infantil/intermediario" ? 'BF1304' : '#fff'} />
                        </Styled.Icones>
                        <Styled.ItemListaTexto isActive={location.pathname === "/biblioteca/infantil/iniciante" || location.pathname === "/biblioteca/infantil/intermediario"}
                            onClick={() => (params.nivel === 'iniciante' ? navigate('/biblioteca/infantil/iniciante') : navigate('/biblioteca/infantil/intermediario'))}
                            primary="Biblioteca" />
                    </Styled.GridLista>
                }
                {params.perfil === 'infantil' &&
                    <Styled.GridLista >
                        <Styled.Icones>
                            <Styled.IconBook color={location.pathname === "/listaleitura/infantil/iniciante" || location.pathname === "/listaleitura/infantil/intermediario" ? 'BF1304' : '#fff'} />
                        </Styled.Icones>
                        <Styled.ItemListaTexto isActive={location.pathname === "/listaleitura/infantil/iniciante" || location.pathname === "/listaleitura/infantil/intermediario"}
                            onClick={() => (params.nivel === 'iniciante' ? navigate('/listaleitura/infantil/iniciante') : navigate('/listaleitura/infantil/intermediario'))}
                            primary="Lista de leitura" />
                    </Styled.GridLista>
                }
                <Styled.GridLista >
                    <Styled.Icones>
                        <Styled.IconProfile color={location.pathname === "/perfil/infantil/iniciante" || location.pathname === "/perfil/infantil/intermediario" || location.pathname === "/perfil/responsavel" ? 'BF1304' : '#fff'} />
                    </Styled.Icones>
                    <Styled.ItemListaTexto isActive={location.pathname === "/perfil/infantil/iniciante" || location.pathname === "/perfil/infantil/intermediario" || location.pathname === "/perfil/responsavel"}
                        onClick={() => { params.perfil === 'infantil' ? (params.nivel === 'iniciante' ? navigate("/perfil/infantil/iniciante") : navigate("/perfil/infantil/intermediario")) : navigate("/perfil/responsavel") }}
                        primary="Perfil" />
                </Styled.GridLista>
                <Styled.GridLista >
                    <Styled.Icones>
                        <Styled.IconExit color={'#fff'} />
                    </Styled.Icones>
                    <Styled.ItemListaTexto isActive={false}
                        onClick={() => { navigate('/') }}
                        primary="Sair" />
                </Styled.GridLista>
            </Styled.SidebarWrapper>
        </Styled.wrapperMainDiv>

    )
}