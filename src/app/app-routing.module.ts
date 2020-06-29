import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { CreateTodoTaskComponent } from './create-todo-task/create-todo-task.component';


const routes: Routes = [
  {
    path:'todo-tasks',
    component:TodoTasksComponent
  },
  {
    path:'addTask',
    component: CreateTodoTaskComponent

  },
  {
    path:'',
    redirectTo:'todo-tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
