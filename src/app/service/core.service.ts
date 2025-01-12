import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  url = `${environment.url}/api/`;

  http = inject(HttpClient);

  constructor() { }

  userList(params: any) {
    if(params.email){
      return this.http.get(`${this.url}users/list?email=${params.email}`);  
    }
    return this.http.get(`${this.url}users/list`);
  }

  userCreate(data: any) {
    return this.http.post(`${this.url}users/create`, data);
  }

  userUpdate(id: string,data: any) {
    return this.http.post(`${this.url}users/update/${id}`, data);
  }

  userDelete(id: string) {
    return this.http.delete(`${this.url}users/delete/${id}`);
  }

  adjustmentList(params: any) {
    return this.http.get(`${this.url}adjustment/list`);
  }

  adjustmentCreate(data: any) {
    return this.http.post(`${this.url}adjustment/create`, data);
  }

  adjustmentUpdate(data: any) {
    return this.http.post(`${this.url}adjustment/update`, data);
  }

  adjustmentDelete(id: string) {
    return this.http.delete(`${this.url}adjustment/delete/${id}`);
  }
}
