import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatamainupulateService } from 'src/app/shared/datamainupulate/datamainupulate.service';
import { StorageService } from 'src/app/shared/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(
    public ds: DatamainupulateService,
    public storage: StorageService,
    public route: Router
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });

  ngOnInit(): void {
    this.storage.setnotLoggedIn()
  }

  login() {
    if (this.loginForm.valid) {
      var response: any = this.ds.loginFunction(this.loginForm.value)
      if (response.status) {
        this.storage.setIsloggedIn()
        this.ds.viewrecord = response.data
        this.route.navigate(['admin'])
      }
      else {

      }
    }
    else {
      console.log("Invalid email")
    }
  }

}
