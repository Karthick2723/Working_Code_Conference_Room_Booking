using Microsoft.JSInterop;
using System.ComponentModel.DataAnnotations;

namespace LoginSampleBackEnd.Models
{
    public class RegisterDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

    }
}
