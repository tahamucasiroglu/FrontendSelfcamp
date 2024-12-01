using BtkAkedemi.Models;
using Microsoft.AspNetCore.Mvc;

namespace BtkAkedemi.Controllers
{
    public class CourseController : Controller
    {
        public IActionResult Index()
        {
            var model = Repository.Applications;
            return View(model);
        }

        public IActionResult Apply()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken] //form için sahtelik kontrolü
        public IActionResult Apply([FromForm]Candidate model)
        {
            Console.WriteLine("Course Candidate Form Cevabı Geldi"); 
            Repository.Add(model);
            return View("Feedback", model);
        }
    }
}
