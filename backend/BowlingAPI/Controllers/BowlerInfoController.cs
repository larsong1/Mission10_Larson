using BowlingAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BowlingAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerInfoController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;
        public BowlerInfoController(IBowlerRepository bowlerRepository)
        {
            _bowlerRepository = bowlerRepository;
        }

        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            var bowlerData = _bowlerRepository.Bowlers.ToArray();

            return bowlerData;
        }
    }
}
