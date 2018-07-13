using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LassePedersen_website.Controllers
{
    [Route("api/[controller]")]
    public class WorkController : Controller
    {
        [HttpGet("[action]")]
        public string[] GetAllWork() {
            DirectoryInfo d = new DirectoryInfo(@"wwwroot/work");
            FileInfo[] files = d.GetFiles();

            List<string> temp = new List<string>();
            foreach(var item in files)
            {
                temp.Add("work/" + item.Name);
            }
            return temp.ToArray();
        }
    }
}
