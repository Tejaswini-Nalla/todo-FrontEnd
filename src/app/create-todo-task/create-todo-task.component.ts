import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { todo } from '../todo';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-todo-task',
  templateUrl: './create-todo-task.component.html',
  styleUrls: ['./create-todo-task.component.css']
})
export class CreateTodoTaskComponent implements OnInit {

  submitted = false;
  todo = new todo();
  // todoTask = {
  //   task:String,
  //   subtasks:[]
  // };
  constructor(private apiService:ApiService, private location: Location) { }

  ngOnInit(): void {
  }

  addTask(data) {
    this.submitted = true;
    this.todo.subtasks = data.subtasks.split(",");
    this.todo.task = data.task;
    // this.todoTask.task = data.task;
    // this.todoTask.subtasks = data.subtasks.split(",");
    this.save();
  }

  private save() {
    console.log(this.todo);
    this.apiService.addTodoTask(this.todo);
  }
  // private save(todoTask) {
  //     this.apiService.addTodoTask(todoTask);
  // }

  goBack() {
    this.location.back();
  }

  newTask() {
    this.submitted = false;
    this.todo = new todo();
  }


 }
