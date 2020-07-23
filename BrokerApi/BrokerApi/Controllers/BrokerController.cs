using BrokerApi.Models;
using BrokerApi.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrokerApi.Controllers
{
    [Route("api/metadatas")]
    [ApiController]
    public class BrokerController : ControllerBase
    {
        private readonly BrokerService _brokerService;

        public BrokerController(BrokerService brokerService)
        {
            _brokerService = brokerService;
        }

        [HttpGet]
        public ActionResult<List<Broker>> Get() =>
            _brokerService.Get();

        [HttpGet("{id:length(24)}", Name = "GetMetadata")]
        public ActionResult<Broker> Get(string id)
        {
            var broker = _brokerService.Get(id);

            if (broker == null)
            {
                return NotFound();
            }

            return broker;
        }

        [HttpPost]
        public ActionResult<Broker> Create(Broker broker)
        {
            _brokerService.Create(broker);

            return CreatedAtRoute("GetMetadata", new { id = broker.Id.ToString() }, broker);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Broker brokerIn)
        {
            var broker = _brokerService.Get(id);

            if (broker == null)
            {
                return NotFound();
            }

            _brokerService.Update(id, brokerIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var broker = _brokerService.Get(id);

            if (broker == null)
            {
                return NotFound();
            }

            _brokerService.Remove(broker.Id);

            return NoContent();
        }
    }
}
