using ApiAurora.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApiAurora.Services.Interfaces
{
    public interface IUsuarioService
    {
        List<Usuario> GetAll();
        Usuario ObterPorId(int id);
        Usuario Adicionar(Usuario usuario);
        Usuario CriarCadastro(Usuario usuario);
        Task<Usuario> LoginUsuario(Login login);
        Usuario ObterPorEmail(string Email);
    }
}
