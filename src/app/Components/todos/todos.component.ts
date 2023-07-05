import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'Title1',
        desc: 'Description1',
        active: true,
      },
      {
        sno: 2,
        title: 'Title2',
        desc: 'Description2',
        active: true,
      },
      {
        sno: 3,
        title: 'Title3',
        desc: 'Description3',
        active: true,
      },
    ];
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }
}
