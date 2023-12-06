using ApiAurora.Data.Interfaces;
using ApiAurora.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using PetaPoco;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;

namespace ApiAurora.Data;

public class UsuarioRepository : IUsuarioRepository
{
    private readonly ILogger<UsuarioRepository> _logger;
    private readonly string _connectionString;

    public UsuarioRepository(ILoggerFactory loggerFactory, IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("AuroraLocal");
        _logger = loggerFactory.CreateLogger<UsuarioRepository>();
    }

    private IDatabase Connection => new Database(_connectionString, SqlClientFactory.Instance);

    public List<Usuario> GetAll()
    {
        var UsuariosList = new List<Usuario>();
        try
        {
            using var Db = Connection;
            UsuariosList = Db.Fetch<Usuario>();

        }
        catch (SqlException ex)
        {
            _logger.LogError("Erro ao conectar com o banco do dados!", ex);
            throw;
        }

        return UsuariosList;
    }

    public Usuario Obter(int id)
    {
        try
        {
            using var Db = Connection;
            const string sqlCommand = "SELECT Id, Nome, NomePai, DataNascimento, Email, Senha FROM usuario WHERE id = @id";

            Usuario retorno = Db.FirstOrDefault<Usuario>(sqlCommand, new { id });
            return retorno;
        } catch (SqlException ex)
        {
            _logger.LogError($"Erro ao usar método Obter; id: {id}", ex);
            throw;
        }
    } 

    public void Adicionar(Usuario usuario)
    {
        try
        {
            using var Db = Connection;
            Db.Insert(usuario);
        }
        catch (SqlException ex) 
        {
            _logger.LogError($"Erro ao usar método Adicionar; Usuário: {usuario}", ex);
            throw;
        }
    }

    public Usuario ObterUsuarioPorEmail(string email)
    {
        try
        {
            using var Db = Connection;

            Usuario usuario = Db.FirstOrDefault<Usuario>("SELECT Id, Nome, NomePai, DataNascimento, Email, Senha FROM usuario WHERE email = @email");
            return usuario;
        }
        catch (SqlException ex)
        {
            _logger.LogError($"Erro ao usar método ObterUsuarioPorEmail; Email: {email}", ex);
            throw;
        }
    }
}

