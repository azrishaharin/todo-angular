import { Component, OnInit } from "@angular/core";
import { Todo } from "../../interfaces/todo";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  title = "To Do List";
  todos: Todo[];
  todoTitle: string;
  idTodo: number;

  ngOnInit() {
    this.idTodo = 1;
    this.todoTitle = "";
    this.todos = [];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length == 0) {
      return;
    }

    this.todos.push({
      id: this.idTodo,
      title: this.todoTitle,
    });

    this.todoTitle = "";
    this.idTodo++;
  }

  deleteTodo(id: number) {
    var r = confirm("do you want to delete this?");
    if (r == true) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    } else {
      return;
    }
  }
}
