import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;

  constructor(public LocalStorage:LocalStorageService) { 

  }

  ngOnInit(): void {
  }

  delete(){
    this.LocalStorage.delete(`${this.todo.title}`).then(res=>{
      if(res){
        console.log("deleted")
      }
    })
  }
  complete(){
    this.todo.active=false;
    this.LocalStorage.add(this.todo).then(res=>{
      if(res){
        console.log("updated")
      }
    })
  }
}
