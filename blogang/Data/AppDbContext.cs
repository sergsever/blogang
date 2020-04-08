using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogang.Data
{
	public class AppDbContext : DbContext
	{
		public AppDbContext() : base(GetOptions()){}

		private static DbContextOptions<AppDbContext> GetOptions()
		{
			IConfiguration conf = new ConfigurationBuilder()
									.AddJsonFile("appsettings.json").Build();
			string connectionString = conf.GetConnectionString("mssql");
			DbContextOptionsBuilder<AppDbContext> builder = new DbContextOptionsBuilder<AppDbContext>();
			builder.UseSqlServer(connectionString);
			return builder.Options;

									
		}

		public DbSet<Article> articles { get; set; }
	}
}
