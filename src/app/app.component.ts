import { Component } from '@angular/core';
import { CompoundExercisesService } from './compound-exercises.service' 

@Component({
  selector: 'app-root',
  // headerMessage is a string interpolation example
  template: `
    <div style="background-color:chocolate">
      <h1>{{ headerMessage }} (Chocolate component is the root)</h1>
      <p [style]="deadliftColored">Deadlift with color (example of property binding)</p>
      <app-nested-component (nestedComponentMessageEmmited)="onButtonClicked($event)"></app-nested-component>
      <p>{{ buttonMessage }}</p>
      <p>the following child component receives data from the root component (e.g. @Input decorator is used)</p>
      <p>Moreover, the exercises are retrieved via a service (CompoundExercisesService)</p>
      <app-exercise *ngFor="let outerExercise of exercises" [innerExercise]="outerExercise"></app-exercise>
    </div>
    `,
  styleUrls: ['./app.component.css'],
  // providers must be implemented in order DI works
  providers: [CompoundExercisesService]
})
export class AppComponent {
  title: string = 'components-and-databinding';
  buttonMessage: string = '';

  // this property is binded to html through string interpolation
  public headerMessage: string;
  // this property is binded to html through property interpolation
  public deadliftColored: string = "background-color:DodgerBlue;";
  //this array is provided as an input to a subcomponent
  public exercises: Array<string>;

  constructor(private compoundExerciseService: CompoundExercisesService) {
    //compoundExerciseService is a dependency injenction example
    this.exercises = compoundExerciseService.getCompoundExercises();

    this.headerMessage = "Crossfit with angular";
    this.deadliftColored = "background-color:DodgerBlue;";
  }

  // app-nested-component emmited an event named nestedComponentMessageEmmited
  onButtonClicked(eventClickData: {message: string, timesEventOccured: number}) {
    this.buttonMessage = eventClickData.message + eventClickData.timesEventOccured;
  }

}
