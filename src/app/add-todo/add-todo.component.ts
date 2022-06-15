import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  newTodo !: Todo;  
  constructor(public LocalStorage:LocalStorageService) { 

  }
  ngOnInit(): void {
  }

  add(){
    let todo : Todo = {
      title : (<HTMLInputElement>document.getElementById("title")).value,
      desc : (<HTMLInputElement>document.getElementById("desc")).value,
      dueDate : new Date((<HTMLInputElement>document.getElementById("dueDate")).value),
      curDate : new Date(),
      active : true
    }
    console.log((<HTMLInputElement>document.getElementById("dueDate")).value)
    console.log(todo)
    this.LocalStorage.add(todo)
    window.location.replace("/");
  }
}
