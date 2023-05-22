import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TaskResponse } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  public getTasks() {
    const url = `${this.apiURL}/task`;
    return this.http.get<any>(url, {
      withCredentials: true,
    });
  }

  public createTasks(task: TaskResponse) {
    const url = `${this.apiURL}/task`;
    return this.http.post<any>(url, task, {
      withCredentials: true,
    });
  }

  public updateTasks(task: TaskResponse, id: string) {
    const url = `${this.apiURL}/task/${id}`;
    return this.http.put<any>(url, task, {
      withCredentials: true,
    });
  }

  public deleteTasks(id: string) {
    const url = `${this.apiURL}/task/${id}`;
    return this.http.delete<any>(url, {
      withCredentials: true,
    });
  }

  public searchTasks(text: string) {
    const url = `${this.apiURL}/task/search/${text}`;
    return this.http.get<any>(url, {
      withCredentials: true,
    });
  }
}
