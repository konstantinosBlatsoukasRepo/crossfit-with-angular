import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nested-component',
  template: '<div style="background-color:lightblue"><button (click)="onButtonClick()">Click to increase burpees!</button><p>a nested crossfit component! that emmits burpees event</p><p>(e.g. an example of @Output)</p></div>',
  styleUrls: ['./nested-component.component.css']
})
export class NestedComponentComponent implements OnInit {

  @Output() nestedComponentMessageEmmited = new EventEmitter<{message: string, timesEventOccured: number}>();
  private eventCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.eventCounter = this.eventCounter + 1;
    this.nestedComponentMessageEmmited.emit({ message: "a burpee emmited!", timesEventOccured: this.eventCounter});
  }

}
