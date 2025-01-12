import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `${environment.url}/api/auth/`;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.url+'login', { email, password });
  }

  register(data: any) {
    return this.http.post(this.url+'register', data);
  }

  resetpass(email: string){
    return this.http.post(this.url+'resetpass', { email });
  }

  logout(){
    return this.http.post(this.url+'logout', {});
  }
}
