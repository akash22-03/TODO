import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../Todo";

@Component({
  selector: 'app-comp-todo',
  templateUrl: './comp-todo.component.html',
  styleUrls: ['./comp-todo.component.css']
})
export class CompTodoComponent implements OnInit {

  ctodos:Todo[];
  constructor() {
    this.ctodos = [
      {
        title:"CCTitle 1",
        desc:"CCDesc 1",
        active:true,
        dueDate: new Date(),
        curDate: new Date()
      },
      {
        title:"CCTitle 2",
        desc:"CCDesc 2",
        active:true,
        dueDate: new Date(),
        curDate: new Date()
      },
      {
        title:"CCTitle 3",
        desc:"CCDesc 3",
        active:true,
        dueDate: new Date(),
        curDate: new Date()
      }
    ];
   }
  
  
  
  ngOnInit(): void {
  }
  
}
