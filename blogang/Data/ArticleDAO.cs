using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogang.Data
{
	public class ArticleDAO : AbstractDAO<Article, int>
	{

		public ArticleDAO(AppDbContext context) : base(context)
		{
		}
		public override Article GetCurrent()
		{
			Article res = this.dbcontext.Set<Article>().OrderByDescending(k => k.ArticleDate).First();
			return res;
		}
	}
}
