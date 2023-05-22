import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginFormData } from '../models/login.model';
import { RegisterFormData } from '../models/register-form.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  public registerUser(user: RegisterFormData) {
    const url = `${this.apiURL}/register`;
    return this.http.post<any>(url, user, {
      withCredentials: true,
    });
  }

  public logIn(user: LoginFormData) {
    const url = `${this.apiURL}/login`;
    return this.http.post<any>(url, user, {
      withCredentials: true,
    });
  }

  public logout() {
    const url = `${this.apiURL}/logout`;
    return this.http.post<any>(
      url,
      {},
      {
        withCredentials: true,
      }
    );
  }
}
