using ApiAurora.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using ApiAurora.Services.Interfaces;
using System;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;

namespace ApiAurora.Controllers
{
    [ApiController]
    [Route("/usuario")]
    public class UsuarioController : ControllerBase
    {

        private readonly ILogger<UsuarioController> _logger;
        private readonly IUsuarioService _usuarioService;

        public UsuarioController(ILogger<UsuarioController> logger, IUsuarioService usuarioService)
        {
            _logger = logger;
            _usuarioService = usuarioService;
        }

        /// <summary>
        ///     Retorna todos os usuários
        /// </summary>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Usuario))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var usuarios = _usuarioService.GetAll();
                return Ok(usuarios);
            } 
            catch (Exception ex)
            {
                _logger.LogError("Erro ao executar método GetAll", ex);
                return Problem(ex.Message);
            }
        }

        ///<summary>
        ///     Retorna usuário por Id
        /// </summary>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Usuario))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [HttpGet("{id}")]
        public IActionResult ObterPorId(int id)
        {
            try
            {
                Usuario usuario = _usuarioService.ObterPorId(id);
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Erro ao utilizar método GetById! id: {id} ", ex);
                return Problem(ex.Message);
            }
        }

        ///<summary>
        ///     Cadastra novo usuário
        /// </summary>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Usuario))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Cadastrar([FromBody] Usuario usuario)
        {
            try
            {
                var cadastro = _usuarioService.CriarCadastro(usuario);
                return Ok(cadastro);
            } 
            catch (Exception ex)
            {
                _logger.LogError($"Erro ao utilizar método Cadastrar! Usuário: {usuario} ", ex);
                throw;
            }
        }

        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Usuario))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [HttpPost]
        [AllowAnonymous]

        public async Task<IActionResult> Login([FromBody] Login login)
        {
            try
            {
                var logar = await _usuarioService.LoginUsuario(login);
                if (logar is null) return Unauthorized();

                return Ok(logar);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Erro ao executar método Login: {login}", ex);
                throw;
            }
        }
    }
}
