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

  adjustmentUpdate(id: string,data: any) {
    return this.http.post(`${this.url}adjustment/update/${id}`, data);
  }

  adjustmentDelete(id: string) {
    return this.http.delete(`${this.url}adjustment/delete/${id}`);
  }

  deliveryList(params: any) {
    return this.http.get(`${this.url}delivery/list`);
  }

  deliveryCreate(data: any) {
    return this.http.post(`${this.url}delivery/create`, data);
  }

  deliveryUpdate(id: string,data: any) {
    return this.http.post(`${this.url}delivery/update/${id}`, data);
  }

  deliveryDelete(id: string) {
    return this.http.delete(`${this.url}delivery/delete/${id}`);
  }

  jobcardList(params: any) {
    return this.http.get(`${this.url}jobcard/list`);
  }

  jobcardCreate(data: any) {
    return this.http.post(`${this.url}jobcard/create`, data);
  }

  jobcardUpdate(id: string,data: any) {
    return this.http.post(`${this.url}jobcard/update/${id}`, data);
  }

  jobcardDelete(id: string) {
    return this.http.delete(`${this.url}jobcard/delete/${id}`);
  }

  productsList(params: any) {
    return this.http.get(`${this.url}products/list`);
  }

  productsCreate(data: any) {
    return this.http.post(`${this.url}products/create`, data);
  }

  productsUpdate(id: string,data: any) {
    return this.http.post(`${this.url}products/update/${id}`, data);
  }

  productsDelete(id: string) {
    return this.http.delete(`${this.url}products/delete/${id}`);
  }

  purchaseList(params: any) {
    return this.http.get(`${this.url}purchase/list`);
  }

  purchaseCreate(data: any) {
    return this.http.post(`${this.url}purchase/create`, data);
  }

  purchaseUpdate(id: string,data: any) {
    return this.http.post(`${this.url}purchase/update/${id}`, data);
  }

  purchaseDelete(id: string) {
    return this.http.delete(`${this.url}purchase/delete/${id}`);
  }

  serviceentryList(params: any) {
    return this.http.get(`${this.url}serviceentry/list`);
  }

  serviceentryCreate(data: any) {
    return this.http.post(`${this.url}serviceentry/create`, data);
  }

  serviceentryUpdate(id: string,data: any) {
    return this.http.post(`${this.url}serviceentry/update/${id}`, data);
  }

  serviceentryDelete(id: string) {
    return this.http.delete(`${this.url}serviceentry/delete/${id}`);
  }
}
