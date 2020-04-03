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
	public class ArticlesController : ControllerBase
	{
		// GET: api/Articles
		[HttpGet]
		public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET: api/Articles/5
		[HttpGet("{id}", Name = "Get")]
		public string Get(int id)
		{
			return "value";
		}

		// POST: api/Articles
		[HttpPost("/Articles/Create")]
		[Route("/Articles/Create")]
		[Consumes("application/json")]
		public IActionResult Create([FromBody] Article value)
		{
			Debug.WriteLine("post request: " + value.Title);
			
			return CreatedAtAction("Create", new Article() {Id=1, Title=value.Title, ArticleDate=value.ArticleDate });
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
