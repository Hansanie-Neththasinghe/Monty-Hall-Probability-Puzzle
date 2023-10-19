using Microsoft.AspNetCore.Mvc;

[Route("api/montyhall")]
[ApiController]
public class MontyHallController : ControllerBase
{
    [HttpPost("simulate")]
    public IActionResult SimulateMontyHall([FromBody] MontyHallSimulationRequest request)
    {
        if (request.SelectedDoor < 1 || request.SelectedDoor > 3)
        {
            return BadRequest("Invalid selected door. Choose 1, 2, or 3.");
        }

        var simulation = new MontyHallSimulation { SelectedDoor = request.SelectedDoor };
        var result = simulation.Simulate();

        return Ok(new { result });
    }
}
