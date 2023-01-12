# FourthAssign

1. create 3 components: game-control, odd, even
2. game control should have 2 buttons start stop
3. when starting the game, an event should be emitted each second
4. the eetn should be listenable from outside the component
5. when stopping the game, no moree events should get emitted, the same should happen for the even component
6. simply output odd - number or even - number in the two component
7. style the element holding your output text differently on the component.

created three components.

## ----------------------------

in game-control component :

in html file: add 2 buttons:

<button class="btn btn-success" (click)="startGame()">Start</button>
    <button class="btn btn-danger" (click)="endGame()">stop</button>

in ts file:

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

## ----------------------------

in odd component:

in html file:

<div class="row">
  <div class="col-md-12">
    <p>Odd - {{ number }}</p>
  </div>
</div>

in ts file

@Input() number: number;

## ----------------------------

in even component:

in html file:

<div class="row">
  <div class="col-md-12">
    <p>Even - {{ number }}</p>
  </div>
</div>

## ----------------------------

in ts file;

@Input() number: number;

in App.component file:

in ts file:

oddNumbers = [];
  evenNumbers = [];

onInterRun(runningNumber: number) {
    if (runningNumber % 2 === 0) {
      this.evenNumbers.push(runningNumber);
    } else {
      this.oddNumbers.push(runningNumber);
    }
  }
