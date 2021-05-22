import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogeService {

  constructor() { }

  createupdateObj: any = {
    recordeditId: { id: '', data: {} }
  }
  idEdit = new BehaviorSubject(this.createupdateObj)
  idEditSubscribe = this.idEdit.asObservable()

  //#region common function
  cuoperationFunc(params: any) {
    this.createupdateObj[params.key] = { id: params.id, data: params.data }
    this.idEdit.next(this.createupdateObj);
  }
  //#endregion 
}
