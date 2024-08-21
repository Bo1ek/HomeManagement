using HomeManagement.Domain.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace HomeManagement.WebAPI.Controllers;

[EnableCors("AllowSpecificOrigin")]
[Route("api/[controller]/[action]")]
[ApiController]
public class TestsController
{
    [HttpGet]
    public List<Test> GetTests()
    {
        var getTestsList = new List<Test>
        {
            new()
            {
                Id = 1,
                TestString = "testString"
            },
            new()
            {
                Id = 2,
                TestString = "drugiString"
            },
        };
        return getTestsList;
    }
}
