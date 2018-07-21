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
    public class BlogController : Controller
    {
        [HttpGet("[action]")]
        public string[] GetAllPosts() {
            DirectoryInfo d = new DirectoryInfo(@"wwwroot/blog");
            FileInfo[] files = d.GetFiles();

            List<string> temp = new List<string>();
            foreach(var item in files)
            {
                temp.Add("blog/" + item.Name);
            }
            return temp.ToArray();
        }
    }
}
