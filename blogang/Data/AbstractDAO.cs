using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogang.Data
{
	public abstract class AbstractDAO<EntityT, KeyT> : IDAO<EntityT, KeyT> where EntityT : class where KeyT : struct
	{
		protected DbContext dbcontext { get; set; }

		public AbstractDAO(DbContext dbcontext)
		{
			this.dbcontext = dbcontext;
		}

		public virtual void Add(EntityT entity)
		{
			dbcontext.Attach<EntityT>(entity);
		}



		public virtual IEnumerable<EntityT> GetAll()
		{
			List<EntityT> res = dbcontext.Set<EntityT>().ToList<EntityT>();
			return res;
		}

		public abstract EntityT GetCurrent();





		public virtual void Delete(KeyT key)
		{
			EntityT entity = (EntityT)dbcontext.Find<EntityT>(key);
			dbcontext.Remove(entity);
		}

		public virtual void Update(EntityT entity)
		{
			dbcontext.Attach(entity);
			dbcontext.Entry<EntityT>(entity).State = EntityState.Modified;
			dbcontext.SaveChanges();
		}

		public EntityT Find(KeyT key)
		{
			EntityT res = dbcontext.Find<EntityT>(key);
			return res;
		}
	}
}

