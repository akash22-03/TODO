import { Component, OnInit } from '@angular/core';
import { Todo } from "../Todo";
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor( public LocalStorage:LocalStorageService) { 
    this.todos = this.LocalStorage.viewData();
  }
  
  ngOnInit(): void { }

}
