using Microsoft.AspNetCore.Mvc;

namespace Store.StoreApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
