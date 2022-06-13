import { Component, OnInit,Input } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-comp-todo-item',
  templateUrl: './comp-todo-item.component.html',
  styleUrls: ['./comp-todo-item.component.css']
})
export class CompTodoItemComponent implements OnInit {
  @Input() ctodo!: Todo;
  constructor() { }

  ngOnInit(): void {
  }

}
