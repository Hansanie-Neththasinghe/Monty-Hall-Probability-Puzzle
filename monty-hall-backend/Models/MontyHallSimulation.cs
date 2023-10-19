public class MontyHallSimulation
{
    public int SelectedDoor { get; set; }

    public string Simulate()
    {
        var carBehindDoor = new Random().Next(1, 4);
        var hostOpensDoor = new Random().Next(1, 4);

        // The host opens a door that doesn't have the car and is not the selected door
        while (hostOpensDoor == carBehindDoor || hostOpensDoor == SelectedDoor)
        {
            hostOpensDoor = new Random().Next(1, 4);
        }

        // Switching doors strategy
        var switchedDoor = 6 - SelectedDoor - hostOpensDoor;

        var win = switchedDoor == carBehindDoor;
        return win ? "You won!" : "You lost!";
    }
}
