import { Component, OnInit } from '@angular/core';
import { Todo } from "../Todo";
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  mytodos:Todo[];
  todos:Todo[];
  constructor(public LocalStorage:LocalStorageService) { 
    this.mytodos = []
    this.todos = []
    this.LocalStorage.viewData(this.mytodos).then(res=>{
      this.todos = this.mytodos.filter(todo => todo.active===true);
    })
    console.log(this.mytodos);
    console.log(this.todos)
  }
  
  ngOnInit(): void { }

}
