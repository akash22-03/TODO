import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../Todo";
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-comp-todo',
  templateUrl: './comp-todo.component.html',
  styleUrls: ['./comp-todo.component.css']
})
export class CompTodoComponent implements OnInit {

  mytodos:Todo[];
  ctodos:Todo[];
  constructor( public LocalStorage:LocalStorageService) {
    this.mytodos = []
    this.ctodos = []

    this.LocalStorage.viewData(this.mytodos).then(res=>{
      this.ctodos = this.mytodos.filter(todo => todo.active!=true);
    })
    
   }
  
  ngOnInit(): void {
  }
  
}
