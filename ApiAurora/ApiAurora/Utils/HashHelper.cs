using System;
using System.Security.Cryptography;
using System.Text;

namespace ApiAurora.Utils
{
    public static class HashHelper
    {
        public static string GerarHash(string input)
        {
            using var geradorHash = SHA256.Create();

            byte[] data = geradorHash.ComputeHash(Encoding.UTF8.GetBytes(input));
            return Convert.ToBase64String(data);
        }
    }
}
