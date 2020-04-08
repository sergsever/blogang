using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using blogang.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace blogang.Controllers
{
	[Route("{controller}/{Action}")]
	[ApiController]
	public class ArticlesController : Controller
	{
		private ArticleDAO dao { get; set; }
		public ArticlesController(ArticleDAO dao)
		{
			this.dao = dao;
		}
		// GET: api/Articles
		[HttpGet]
		public JsonResult Get()
		{
			Article article = dao.GetCurrent();
			return Json(article);

		}


		// POST: api/Articles
		[HttpPost("/Articles/Create")]
		[Route("/Articles/Create")]
		[Consumes("application/json")]
		public IActionResult Create([FromBody] Article value)
		{
			Debug.WriteLine("post request: " + value.ArticleDate);
			try { 
				dao.Add(value);
			}
			catch(Exception e)
			{
				throw new Exception("Error when an Article was adding" + e.Message);
			}
			
			return CreatedAtAction("Create", new Article() {Id=1, Title=value.Title, ArticleDate= DateTime.Now });
		}

		// PUT: api/Articles/5
		[HttpPut("{id}")]
        public void Put(int id, [FromBody] Article value)
        {
			Debug.WriteLine("put request: " + value);

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
