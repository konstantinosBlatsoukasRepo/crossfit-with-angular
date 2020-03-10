import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nested-component',
  template: '<div style="background-color:lightblue"><button (click)="onButtonClick()">Click to emmit an event!!</button><p>a nested crossfit component!</p></div>',
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
    this.nestedComponentMessageEmmited.emit({ message: "a message emmited!", timesEventOccured: this.eventCounter});
  }

}
