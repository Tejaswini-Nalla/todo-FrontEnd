import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { todo } from '../todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {

  todoTasks: any;
  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getTodoTasks();
  }

  getTodoTasks() {
    this.apiService.getTodoTasks().subscribe( data => {
      this.todoTasks = data;
      console.log(data);
    });
  }

  deleteTask(id) {
    console.log(id);
    this.apiService.deleteTodoTask(id);
    window.location.reload();
  }

  editTask(id) {
    this.router.navigate(['../editTask',{'id':id}]);
  }

}
