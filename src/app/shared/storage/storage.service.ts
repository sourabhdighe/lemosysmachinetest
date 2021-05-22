import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  database: any = [{
    id: 1,
    name: 'admin1',
    email: 'admin-1@gmail.com',
    password: '12345678',
    mobileno: '7533218188',
    designation: 'Developer',
    gender: 'Male'
  }]


  constructor() { }

  localstorage: any = localStorage.getItem('globalrecord');
  record = JSON.parse(this.localstorage) || this.database


  getRecord() {
    return this.record
  }

  setRecord(data: any) {
    localStorage.setItem('globalrecord', JSON.stringify(data))
  }

  setIsloggedIn() {
    localStorage.setItem('isLoggedIn', 'true')
  }

  setnotLoggedIn() {
    localStorage.setItem('isLoggedIn', 'false')
  }
}
