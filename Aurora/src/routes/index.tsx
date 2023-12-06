import { Route, Routes } from 'react-router-dom';
import { EscolherPerfil } from '../pages/EscolherPerfil';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { Informacao } from '../pages/InformacaoCadastroInfantil';
import { CadastroInfantil } from '../pages/Cadastro/CadastroInfantil';
import { Perfil } from '../pages/Perfil';
import { TelaInicial } from '../pages/TelaInicial';
import { Biblioteca } from '../pages/Biblioteca';
import { ListaLeitura } from '../pages/ListaLeitura';
import { Livro } from '../pages/Livro';

const AllRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<EscolherPerfil />} />
            <Route path="/login/:perfil" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/informacao-cadastro-infantil" element={<Informacao />}/>
            <Route path="/cadastro/infantil" element={< CadastroInfantil/>} />
            <Route path="/home/:perfil/:nivel" element={< TelaInicial/>} />
            <Route path="/perfil/:perfil/:nivel" element={<Perfil />} />
            <Route path="/biblioteca/:perfil/:nivel" element={<Biblioteca />} />
            <Route path="/listaleitura/:perfil/:nivel" element={<ListaLeitura />} />
            <Route path='/livro' element={<Livro />} />
        </Routes>
    );
}

export default AllRoutes;