using ApiAurora.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApiAurora.Data.Interfaces
{
    public interface IUsuarioRepository
    {
        List<Usuario> GetAll();
        Usuario Obter(int id);
        void Adicionar(Usuario usuario);
        Usuario ObterUsuarioPorEmail(string email);
    }
}
