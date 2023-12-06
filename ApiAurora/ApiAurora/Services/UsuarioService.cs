using ApiAurora.Data.Interfaces;
using ApiAurora.Models;
using ApiAurora.Services.Interfaces;
using ApiAurora.Utils;
using Azure.Core;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Transactions;

namespace ApiAurora.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly ILogger _logger;
        private readonly IUsuarioRepository _usuarioRepository;
        private readonly IUsuarioService _usuarioService;

        public UsuarioService(ILoggerFactory loggerFactory, IUsuarioRepository usuarioRepository, IUsuarioService usuarioService)
        {
            _logger = loggerFactory.CreateLogger<UsuarioService>();
            _usuarioRepository = usuarioRepository;
            _usuarioService = usuarioService;
        }

        #region Métodos

        public List<Usuario> GetAll()
        {
            try
            {
                return _usuarioRepository.GetAll();
            } 
            catch (Exception ex)
            {
                _logger.LogError("Erro ao buscar usuários", ex);
                throw;
            }
        }

        public Usuario ObterPorId(int id)
        {
            try
            {
                Usuario usuario = _usuarioRepository.Obter(id);
                return usuario;
            } 
            catch (Exception ex)
            {
                _logger.LogError("Erro ao buscar usuário por id", ex);
                throw;
            }
        }

        public Usuario Adicionar(Usuario usuario)
        {
            try
            {
                _usuarioRepository.Adicionar(usuario);

                return usuario;
            }
            catch (Exception ex)
            {
                _logger.LogError("Erro ao adicionar usuário", ex);
                throw;
            }
        }

        public Usuario CriarCadastro(Usuario usuario)
        {
            try
            {
                using var scope = new TransactionScope();

                var senha = HashHelper.GerarHash(usuario.Senha);

                var user = new Usuario
                {
                    Nome = usuario.Nome,
                    NomePai = usuario.NomePai,
                    DataNascimento = usuario.DataNascimento,
                    Email = usuario.Email,
                    Senha = senha
                };

                _usuarioService.Adicionar(usuario);

                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError("Erro ao cadastrar usuário", ex);
                throw;
            }
        } 
     
        public Usuario ObterPorEmail(string email)
        {
            try
            {
                return _usuarioRepository.ObterUsuarioPorEmail(email);
            }
            catch (Exception ex)
            {
                _logger.LogError("Erro ao obter usuário por email", ex);
                throw;
            }
        }

        public async Task<Usuario> LoginUsuario(Login login)
        {
            try
            {
                Usuario usuario = ObterPorEmail(login.Email);

                if (usuario is null)
                    throw new UnauthorizedAccessException("Usuário inválido");

                var senha = HashHelper.GerarHash(login.Senha);

                if (usuario.Senha != senha)
                    throw new UnauthorizedAccessException("Senha inválida!");

                return usuario;
            }
            catch (UnauthorizedAccessException)
            {
                throw;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Erro ao logar usuário; Login: {login}", ex);
                throw;
            }
        }

        #endregion
    }
}
