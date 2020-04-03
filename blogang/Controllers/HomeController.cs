using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using blogang.Models;

namespace blogang.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
/*
		[HttpPost("api/Articles/Create")]
		[Route("api/Articles/Create")]
		[Consumes("application/json")]
		public IActionResult Create([FromBody] Article value)
		{
			Debug.WriteLine("post request: " + value);

			return CreatedAtAction("Create", new Article() { Title = value.Title, ArticleDate = value.ArticleDate });
		}
*/
		public IActionResult Privacy()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}
