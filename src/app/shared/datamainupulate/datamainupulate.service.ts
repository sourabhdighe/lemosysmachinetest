import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DatamainupulateService {

  constructor(
    public localstorage: StorageService
  ) {
    this.readrecordFunction()
  }

  setdata = new BehaviorSubject({})
  setdataService = this.setdata.asObservable()

  dialogSize: any = {
    width: '941px',
    height: 'auto'
  }

  viewrecord: any = []

  loginFunction(data: any) {
    var getlist = this.localstorage.getRecord()
    var errormsg = "Invalid credential"
    var result;
    getlist.forEach((element: any) => {
      if ((element.email == data.email) && (element.password == data.password)) {
        result = { status: true, message: "Logged In", data: getlist }
      }
      else {
        result = { status: false, message: errormsg, data: [] }
      }
    });
    return result
  }

  deleterecordFunction(id: any) {
    var array = this.localstorage.getRecord();
    const indx = array.findIndex((delrecord :any)=> delrecord.id === id);
    array.splice(indx, indx >= 0 ? 1 : 0);
    this.localstorage.setRecord(array);
    this.readrecordFunction()
  }

  //Add record
  addrecordFunction(obj: any) {
    var array = this.localstorage.getRecord()
    array.forEach((element: any) => {
      console.log(obj)
      if (element.id !== obj.id) {
        array.push(obj)
      }
    });
    this.localstorage.setRecord(array);
    this.readrecordFunction()
  }

  //Update record
  updaterecordFunction(obj: any) {
    var array = this.localstorage.getRecord()
    array.forEach((element: any, index: any) => {
      if (element.id === obj.id) {
        array[index] = obj;
      }
    });
    this.localstorage.setRecord(array);
    this.readrecordFunction()
  }

  readrecordFunction() {
    this.setdata.next({ data: this.localstorage.getRecord() })
  }

  viewRecord() {
    return this.localstorage.record
  }
}
