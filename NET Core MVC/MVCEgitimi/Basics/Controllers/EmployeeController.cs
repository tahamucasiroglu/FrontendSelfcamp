using Basics.Models;
using Microsoft.AspNetCore.Mvc;

namespace Basics.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            return View("Index", $"asdasdasdasdad  {DateTime.Now.ToString()}");
        }

        public IActionResult Index2()
        {
            List<Employee> employees = new List<Employee>()
            {
                new Employee(){Id = 1, FirstName="Ahmet", LastName="Can", Age=20},
                new Employee(){Id = 2, FirstName="Can", LastName="Dağ", Age=25},
                new Employee(){Id = 3, FirstName="Demir", LastName="Güneş", Age=37},
            };
            return View("Index2",employees);
        }
    }
}
