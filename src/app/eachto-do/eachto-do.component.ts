import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eachto-do',
  templateUrl: './eachto-do.component.html',
  styleUrls: ['./eachto-do.component.css']
})
export class EachtoDoComponent {

  @Input()
  todoArray: any[] = [];

  @Output()
  removeItemEvent = new EventEmitter<number>();

  removeItem(index: number): void {
    this.removeItemEvent.emit(index);
  }
}