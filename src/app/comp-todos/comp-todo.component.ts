import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../Todo";
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-comp-todo',
  templateUrl: './comp-todo.component.html',
  styleUrls: ['./comp-todo.component.css']
})
export class CompTodoComponent implements OnInit {

  ctodos:Todo[];
  constructor( public LocalStorage:LocalStorageService) {
    this.ctodos = this.LocalStorage.viewCompData();
    console.log(this.ctodos)
   }
  
  ngOnInit(): void {
  }
  
}
