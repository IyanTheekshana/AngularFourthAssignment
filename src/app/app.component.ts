import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  onInterRun(runningNumber: number) {
    if (runningNumber % 2 === 0) {
      this.evenNumbers.push(runningNumber);
    } else {
      this.oddNumbers.push(runningNumber);
    }
  }
}
