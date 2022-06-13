import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { CompTodoComponent } from './MyComponents/comp-todo/comp-todo.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  {path:'', component:TodosComponent},
  {path:'addtodo', component:AddTodoComponent},
  {path:'comptodo', component:CompTodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
