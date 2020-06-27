using aspApp.Models;
using System.Collections.Generic;

namespace aspApp.Repositories
{
    public abstract class Repository<T> where T : class
    {
        public dbappContext Context { get; set; }

        public Repository()
        {
            Context = new dbappContext();
        }

        public Repository(dbappContext context)
        {
            Context = context;
        }

        public IEnumerable<T> GetAll()
        {
            return Context.Set<T>();
        }

        public T GetById(object id)
        {
            return Context.Find<T>(id);
        }

        public void Insert(T entity)
        {
            Context.Add(entity);
            Save();
        }

        public void Update(T entity)
        {
            Context.Update(entity);
            Save();
        }

        public void Delete(T entity)
        {
            Context.Remove(entity);
            Save();
        }

        void Save()
        {
            Context.SaveChanges();
        }
    }
}