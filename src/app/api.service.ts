import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {todo} from './todo';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private hiturl = 'http://localhost:3000/tasks'
    constructor(private http: HttpClient) { }

    getTodoTasks() {
        return this.http.get(this.hiturl);
    }

    // addCustomer(todoTask: todo ) {
    //     return this.http.post<todo>(this.hiturl,todoTask,httpOptions).subscribe( res => console.log(res));
    // }

    addTodoTask(todoTask) {
        return this.http.post(this.hiturl,todoTask,httpOptions)
                        .subscribe((res) => console.log(res));
    }

    deleteTodoTask(id) {
        return this.http.delete(this.hiturl+"/"+id)
                        .subscribe((res) => console.log(res));

    }

    getTodoTaskById(id) {
        return this.http.get(this.hiturl+"/"+id);
    }
}