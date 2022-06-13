import { Component, OnInit } from '@angular/core';
import { Todo } from "../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  
  constructor() { 
    this.todos = [
      {
        title:"Title 1",
        desc:"Desc 1",
        active:true,
        dueDate: new Date(),
        curDate: new Date()
      },
      {
        title:"Title 2",
        desc:"Desc 2",
        active:true,
        dueDate: new Date(),
        curDate: new Date()
      },
      {
        title:"Title 3",
        desc:"Desc 3",
        active:true,
        dueDate: new Date(),
        curDate: new Date()
      }
    ];
    
  }


  ngOnInit(): void {
  }

  deleteTodo(todo:Todo)
  {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
  completeTodo(todo:Todo){
    var el = this.todos.find(function (element) {
      return element = todo;
    });
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    //Shared Service Concept
    //Breaking here
  }
}
