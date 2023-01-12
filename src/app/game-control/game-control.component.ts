import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() intervalRun = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  startGame() {
    this.interval = setInterval(() => {
      this.intervalRun.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  endGame() {
    clearInterval(this.interval);
  }
}
