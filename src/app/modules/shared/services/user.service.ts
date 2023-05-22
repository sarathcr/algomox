import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  public getUser() {
    const url = `${this.apiURL}/user`;
    return this.http.get<any>(url, {
      withCredentials: true,
    });
  }
}
