using System;
using System.Collections.Generic;

namespace aspApp.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Phone { get; set; }
        public string EMail { get; set; }
        public DateTime Birthday { get; set; }
    }
}
