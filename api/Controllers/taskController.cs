using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class taskController : ControllerBase
    {
        // GET: api/task
        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public List<Tasks> Get()
        {
            return HandleTaskData.GetAllTasks();
        }

        // GET: api/task/5
        [EnableCors("AnotherPolicy")]
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            if(id == 1){
                return "Hello";
            }
            return "value";
        }

        // POST: api/task
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void Post([FromBody] Tasks value)
        {
            System.Console.WriteLine("Made it to the POST " + value.Task);
            HandleTaskData.PostTask(value);
        }

        // PUT: api/task/5
        [EnableCors("AnotherPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Tasks value)
        {
            System.Console.WriteLine("Made it to the PUT " + value.Task);
            HandleTaskData.PutTask(value);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
