using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogang.Data
{
	public class Article
	{
		public int Id { get; set; }
		public DateTime ArticleDate { get; set; }
		public string Title { get; set; }
		public string Content { get; set; }
	}
}
