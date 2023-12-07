import { Grid, Paper, InputBase, IconButton, Pagination } from "@mui/material"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import * as Styled from './Biblioteca.styled'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ChapeuzinhoAmarelo from '../../assets/img/ChapeuzinhoAmarelo.png'
import BrancaNeve from '../../assets/img/brancadeneve.png'
import Bambi from '../../assets/img/bambi.png'
import ChapeuzinhoVermelho from '../../assets/img/chapeuzinhovermelho.png'
import MagicoOz from '../../assets/img/magicodeoz.png'
import Alice from '../../assets/img/alicenopaisdasmaravilhas.png'
import Malala from '../../assets/img/malala.png'
import IrmaosGrimm from '../../assets/img/irmaosgrimm.png'
import JardimSecreto from '../../assets/img/jardimsecreto.png'
import BruxaeoCaldeirao from '../../assets/img/bruxaeocaldeirao.png'
import MeninoMaluquinho from '../../assets/img/MeninoMaluquinho.png'
import PeterPan from '../../assets/img/peterpan.png'
import ArvoreGenerosa from '../../assets/img/arvoregenerosa.png'
import CachinhosOuro from '../../assets/img/cachinhosdeouro.png'
import MonstroQueAdoravaLer from '../../assets/img/monstroqueadoravaler.png'
import DonaBaratinha from '../../assets/img/donabaratinha.png'
import OsVizinhos from '../../assets/img/osvizinhos.png'
import Pinoquio from '../../assets/img/pinoquio.png'

export const Biblioteca = () => {

    const [genero, setGenero] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setGenero(event.target.value);
    };

    return (
        <Grid container>
            <Grid xs={2}>
                <Sidebar />
            </Grid>
            <Grid xs={10}>
                <Styled.GridPesquisa>
                    <Styled.Titulo>Biblioteca</Styled.Titulo>
                    <Styled.Filtros>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">Gênero</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={genero}
                                label="Genero"
                                onChange={handleChange}
                                sx={{ borderRadius: '24px', border: 'solid 1px #9E9999' }}
                            >
                                <MenuItem value={10}>Fantasia</MenuItem>
                                <MenuItem value={20}>Contos de fadas</MenuItem>
                                <MenuItem value={30}>Fábulas</MenuItem>
                            </Select>
                        </FormControl>
                        <Paper component="form" sx={{ p: '2px 4px', border: 'solid 1px #9E9999', borderRadius: '24px', display: 'flex', alignItems: 'center', width: 400, height: 50, marginTop: '10px', marginRight: '32px' }}>
                            <InputBase sx={{ ml: 1, flex: 1 }}
                                placeholder="Pesquisar livro"
                                inputProps={{ 'aria-label': 'pesquisar livro' }} />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Styled.Filtros>
                </Styled.GridPesquisa>
                <Styled.GridBiblioteca>
                    <Grid>
                        <Styled.Capa src={ArvoreGenerosa} />
                        <Styled.TituloLivros>A árvore generosa</Styled.TituloLivros>
                        <Styled.TextoLivros>Shel Silverstein</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={BruxaeoCaldeirao} />
                        <Styled.TituloLivros>A bruxa e o caldeirão</Styled.TituloLivros>
                        <Styled.TextoLivros>José Leon Machado</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={Alice} />
                        <Styled.TituloLivros>Alice no país das m...</Styled.TituloLivros>
                        <Styled.TextoLivros>Lewis Carrol</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={Bambi} />
                        <Styled.TituloLivros>Bambi</Styled.TituloLivros>
                        <Styled.TextoLivros>Felix Salten</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={BrancaNeve} />
                        <Styled.TituloLivros>Branca de Neve</Styled.TituloLivros>
                        <Styled.TextoLivros>Irmãos Grimm</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={CachinhosOuro} />
                        <Styled.TituloLivros>Cachinhos de Ouro</Styled.TituloLivros>
                        <Styled.TextoLivros>Ana Maria Machado</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={ChapeuzinhoAmarelo} />
                        <Styled.TituloLivros>Chapeuzinho Amarelo</Styled.TituloLivros>
                        <Styled.TextoLivros>Chico Buarque</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={ChapeuzinhoVermelho} />
                        <Styled.TituloLivros>Chapeuzinho Vermelho</Styled.TituloLivros>
                        <Styled.TextoLivros>Charles Perrault</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={IrmaosGrimm} />
                        <Styled.TituloLivros>Contos de fadas dos ...</Styled.TituloLivros>
                        <Styled.TextoLivros>Irmãos Grimm</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={DonaBaratinha} />
                        <Styled.TituloLivros>Dona Baratinha</Styled.TituloLivros>
                        <Styled.TextoLivros>Ana Maria Machado</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={Malala} />
                        <Styled.TituloLivros>Malala</Styled.TituloLivros>
                        <Styled.TextoLivros>Adriana Carranca</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={JardimSecreto} />
                        <Styled.TituloLivros>O Jardim Secreto</Styled.TituloLivros>
                        <Styled.TextoLivros>Frances Hodgson Ber...</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={MagicoOz} />
                        <Styled.TituloLivros>O Mágico de Oz</Styled.TituloLivros>
                        <Styled.TextoLivros>L. Frank Baum</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={MeninoMaluquinho} />
                        <Styled.TituloLivros>O Menino Maluquinho</Styled.TituloLivros>
                        <Styled.TextoLivros>Ziraldo</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={MonstroQueAdoravaLer} />
                        <Styled.TituloLivros>O monstro que ador...</Styled.TituloLivros>
                        <Styled.TextoLivros>Lili Chartrand</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={OsVizinhos} />
                        <Styled.TituloLivros>Os Vizinhos</Styled.TituloLivros>
                        <Styled.TextoLivros>Einat Tsarfati</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={PeterPan} />
                        <Styled.TituloLivros>Peter Pan</Styled.TituloLivros>
                        <Styled.TextoLivros>J. M. Barrie</Styled.TextoLivros>
                    </Grid>
                    <Grid>
                        <Styled.Capa src={Pinoquio} />
                        <Styled.TituloLivros>Pinóquio</Styled.TituloLivros>
                        <Styled.TextoLivros>Carlo Collodi</Styled.TextoLivros>
                    </Grid>
                </Styled.GridBiblioteca>
                <Styled.GridPagination>
                    <Pagination count={8} />
                </Styled.GridPagination>
            </Grid>
        </Grid>
    )
}