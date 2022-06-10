import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

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
        sno:1,
        title:"Title 1",
        desc:"Desc 1",
        active:true
      },
      {
        sno:2,
        title:"Title 2",
        desc:"Desc 2",
        active:true,
      },
      {
        sno:3,
        title:"Title 3",
        desc:"Desc 3",
        active:true,
      }
    ]

  }


  ngOnInit(): void {
  }

  deleteTodo(todo:Todo)
  {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
  
}
