using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Store.StoreApp.Models;

namespace Store.StoreApp.Controllers
{
    public class ProductController : Controller
    {
        private readonly RepositoryContext _context;
        public ProductController(RepositoryContext repositoryContext)
        {
            _context = repositoryContext;
        }
        public IActionResult Index()
        {
            List<Store.StoreApp.Models.Product> model = _context.Products.ToList();
            return View(model);
        }

        public IActionResult Get(int id)
        {
            Product model = _context.Products.First(p => p.ProductId == id);
            return View(model);
        }
    }
}
