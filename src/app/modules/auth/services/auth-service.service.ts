import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterFormData } from '../models/register-form.model';
import { LoginFormData } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiURL = environment.apiURL
  constructor(private http: HttpClient) { }

  public registerUser(user: RegisterFormData) {
    const url = `${this.apiURL}/register`;
    return this.http.post<any>(url, user,{
      withCredentials: true
    })
    // .pipe(
    //   map((res: any) => {
    //     localStorage.setItem('token', res.access_token);
    //     return res;
    //   })
    // );

  }
  
  public logIn(user: LoginFormData){
    const url = `${this.apiURL}/login`;
    return this.http.post<any>(url,user, {
      withCredentials: true
    })
  }

  public logout(){
    const url = `${this.apiURL}/logout`;
    return this.http.post<any>(url,{}, {
      withCredentials: true
    })
  }
}

