import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatamainupulateService } from 'src/app/shared/datamainupulate/datamainupulate.service';
import { DialogeService } from '../dialoge.service';

@Component({
  selector: 'app-createupdateform',
  templateUrl: './createupdateform.component.html',
  styleUrls: ['./createupdateform.component.scss']
})
export class CreateupdateformComponent implements OnInit {

  isUpdate: any = false
  date: any = new Date()
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z]{3,20}\s*)+/)]),
    mobileno: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*.-]{8,20}$/)]),
    designation: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  })

  password: any = ''
  id: any = 0
  designation: any = ['Developer', 'QA', 'Designer'];
  gender: any = ['Male', 'Female'];

  constructor(
    public dialogeservice: DialogeService,
    public dialoge: MatDialog,
    public dataservice: DatamainupulateService
  ) { }

  ngOnInit(): void {
    this.loadService()
  }

  loadService() {
    this.dialogeservice.idEditSubscribe.subscribe((el: any) => {
      if (el.recordeditId) {
        this.isUpdate = (el.recordeditId.id !== '0')
        if (this.isUpdate) {
          this.id = el.recordeditId.id
          this.password = el.recordeditId.data.password
          var setObject = {
            name: el.recordeditId.data.name,
            mobileno: el.recordeditId.data.mobileno,
            email: el.recordeditId.data.email,
            password: el.recordeditId.data.password,
            designation: el.recordeditId.data.designation,
            gender: el.recordeditId.data.gender,
          }
          this.userForm.setValue(setObject);
          this.userForm.controls['password'].disable();
        }
        else {
          this.userForm.controls['password'].enable();
        }
      }
    })
  }

  cuFunction() {
    if (this.userForm.valid) {
      if (this.isUpdate) {
        this.userForm.value['id'] = this.id;
        this.userForm.value['password'] = this.password
        this.dataservice.updaterecordFunction(this.userForm.value)
        this.dialoge.closeAll()
      }
      else{
        this.userForm.value['id'] = this.date.getTime();
        this.dataservice.addrecordFunction(this.userForm.value)
        this.dialoge.closeAll()
      }
    }
  }

}
