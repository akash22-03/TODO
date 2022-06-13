import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CompTodoComponent } from './comp-todos/comp-todo.component';
import { TodosComponent } from './todos/todos.component';

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
