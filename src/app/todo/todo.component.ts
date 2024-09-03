import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoName: string = '';
  todoList: Array<any> = [];

  addTodo(): void {
    if (this.todoName.trim() !== '') {
      this.todoList.push(this.todoName);
      this.todoName = '';
    }
  }

  removeTodoItem(index: number): void {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList.splice(index, 1);
    }
  }

  onRemoveItem(index: number): void {
    this.removeTodoItem(index);
  }
}