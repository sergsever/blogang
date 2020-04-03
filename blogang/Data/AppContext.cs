using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogang.Data
{
	public class AppContext : DbContext
	{

		private static DbContextOptions<AppContext> GetOptions()
		{
			IConfiguration conf = new ConfigurationBuilder()
									.AddJsonFile("appsettings.json").Build();
			string connectionString = conf.GetConnectionString("mssql");

									
		}
	}
}
