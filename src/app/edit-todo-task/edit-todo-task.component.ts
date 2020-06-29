import { Component, OnInit } from '@angular/core';
import { todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-todo-task',
  templateUrl: './edit-todo-task.component.html',
  styleUrls: ['./edit-todo-task.component.css']
})
export class EditTodoTaskComponent implements OnInit {

  submitted = false;
  todo = new todo();
  task:any;
  subtasks:any;
  constructor(private route:ActivatedRoute, private apiService:ApiService, private location:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      console.log(params['id']);
      this.getTaskData(params['id']);
    })
  }

  getTaskData(id) {
    this.apiService.getTodoTaskById(id).subscribe( todoTask => {
      console.log(todoTask);
     
    })
  }

  editTodoTask(data) {

  }

  goBack() {
    this.location.back();
  }
}
