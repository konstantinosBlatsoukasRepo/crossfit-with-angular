import { Component } from '@angular/core';

// <app-exercise *ngFor="let rootExercise of exercises"></app-exercise>
@Component({
  selector: 'app-root',
  // headerMessage is a string interpolation example
  template: `
    <div style="background-color:chocolate">
      <h1>{{ headerMessage }} (Chocolate component is the root)</h1>
      <p [style]="deadliftColored">Deadlift with color (example of property binding)</p>
      <app-nested-component (nestedComponentMessageEmmited)="onButtonClicked($event)"></app-nested-component>
      <p>{{ buttonMessage }}</p>
      <p>the following component receives data from a root component</p>
      <app-exercise *ngFor="let outerExercise of exercises" [innerExercise]="outerExercise"></app-exercise>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'components-and-databinding';
  buttonMessage: string = '';

  // this property is binded to html through string interpolation
  public headerMessage: string;
  // this property is binded to html through property interpolation
  public deadliftColored: string = "background-color:DodgerBlue;";

  public exercises: Array<string> = ["deadlift", "squat", "military presses"];

  constructor() {
    this.headerMessage = "Crossfit with angular";
    this.deadliftColored = "background-color:DodgerBlue;";
  }

  // app-nested-component emmited an event named nestedComponentMessageEmmited
  onButtonClicked(eventClickData: {message: string, timesEventOccured: number}) {
    this.buttonMessage = eventClickData.message + eventClickData.timesEventOccured;
  }

}
