using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogang.Data
{
	public interface IDAO<EntityT, KeyT>
	{
		void Add(EntityT entity);
		IEnumerable<EntityT> GetAll();
		EntityT GetCurrent();
		EntityT Find(KeyT key);
		void Delete(KeyT key);
		void Update(EntityT entity);
	}
}
