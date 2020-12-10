namespace api.Entities
{
    // dotnet sln add .\api\api.csproj : fix loi k chen duoc Dbcontext
    public class AppUser
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
    }
}