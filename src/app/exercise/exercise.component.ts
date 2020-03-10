import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise',
  template: '<li style="background-color:lightblue">{{ innerExercise }}</li>',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  @Input() innerExercise: string;

  constructor() { }

  ngOnInit(): void {
  }

}
