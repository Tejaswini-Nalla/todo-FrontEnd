import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { CreateTodoTaskComponent } from './create-todo-task/create-todo-task.component';
import { FormsModule } from '@angular/forms';
import { EditTodoTaskComponent } from './edit-todo-task/edit-todo-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoTasksComponent,
    CreateTodoTaskComponent,
    EditTodoTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
