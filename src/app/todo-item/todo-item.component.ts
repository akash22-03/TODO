import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoComp: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClickDelete(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("Function to complete")
    //we need to change array of todo
    //so we need to use eventemmiter 
  }
  onClickComp(todo:Todo){
    this.todoComp.emit(todo);
    console.log("Function to complete")
    //we need to change array of todo
    //so we need to use eventemmiter 
  }
}
