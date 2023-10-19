// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-monty-hall',
//   templateUrl: './monty-hall.component.html',
// })
// export class MontyHallComponent {
//   numberOfSimulations: number;
//   initialDoors: number[] = [];
//   changeDoor: string;
//   results: string[] = [];

//   constructor() {
//     this.numberOfSimulations = 1;
//     this.changeDoor = 'no';
//   }

//   simulateMontyHall() {
//     this.results = [];
//     this.initialDoors = [];

//     for (let i = 0; i < this.numberOfSimulations; i++) {
//       // get the door number
//       let initialDoor = this.initialDoors[i] || Math.floor(Math.random() * 3) + 1;
//       this.initialDoors.push(initialDoor);

//       // Generate a random location for the car (1, 2, or 3)
//       const carLocation = Math.floor(Math.random() * 3) + 1;

//       // Determine the revealing door
//       let revealDoor: number;
//       do {
//         revealDoor = Math.floor(Math.random() * 3) + 1;
//       } while (revealDoor === carLocation || revealDoor === initialDoor);

//       // switch doors
//       if (this.changeDoor.toLowerCase() === 'yes') {
//         initialDoor = [1, 2, 3].find((door) => door !== initialDoor && door !== revealDoor)!;
//       }

//       // Displaysimulation result
//       const win = initialDoor === carLocation;
//       const result = win ? 'Congratulations !!! You won!' : 'Oooops! You lost!';

//       this.results.push(result);
//     }
//   }
// }



import { Component } from '@angular/core';

@Component({
  selector: 'app-monty-hall',
  templateUrl: './monty-hall.component.html',
})
export class MontyHallComponent {
  numberOfSimulations: number;
  initialDoors: number[] = [];
  changeDoor: string;
  results: string[] = [];
  winningCount: number = 0;
  losingCount: number = 0;
  // imagePath1: string = 'assets/car.jpg';
  // imagePath2: string = 'assets/MontyHallGoat.jpg';

  constructor() {
    this.numberOfSimulations = 1;
    this.changeDoor = 'no';
  }

  simulateMontyHall() {
    this.results = [];
    this.initialDoors = [];
    this.winningCount = 0;
    this.losingCount = 0;

    for (let i = 0; i < this.numberOfSimulations; i++) {
      // get the door number
      let initialDoor = this.initialDoors[i] || Math.floor(Math.random() * 3) + 1;
      this.initialDoors.push(initialDoor);

      // Generate a random location for the car (1, 2, or 3)
      const carLocation = Math.floor(Math.random() * 3) + 1;

      // Determine the revealing door
      let revealDoor: number;
      do {
        revealDoor = Math.floor(Math.random() * 3) + 1;
      } while (revealDoor === carLocation || revealDoor === initialDoor);

      // switch doors
      if (this.changeDoor.toLowerCase() === 'yes') {
        initialDoor = [1, 2, 3].find((door) => door !== initialDoor && door !== revealDoor)!;
      }

      // Display simulation result
      const win = initialDoor === carLocation;
      if (win) {
        this.winningCount++;
        this.results.push('Congratulations !!! You won!');
      } else {
        this.losingCount++;
        this.results.push('Oooops! You lost!');
      }
    }
  }
}
