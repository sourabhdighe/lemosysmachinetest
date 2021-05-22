import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CreateupdateformComponent } from '../dialoge/createupdateform/createupdateform.component';
import { DialogeModule } from '../dialoge/dialoge.module';
import { DialogeService } from '../dialoge/dialoge.service';
import { DatamainupulateService } from '../shared/datamainupulate/datamainupulate.service';
import { StorageService } from '../shared/storage/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  dataSource: MatTableDataSource<any>
  displayedColumns: string[] = ['id', 'name', 'email', 'mobileno', 'designation', 'gender', 'Action(edit)', 'Action(delete)'];
  constructor(
    public dms: DatamainupulateService,
    public dialogeservice: DialogeService,
    public router: Router,
    public dialoge: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }


  ngOnInit(): void {
    this.getrecordList()

  }

  /*create users*/
  createUsers() {
    this.dialoge.open(CreateupdateformComponent, this.dms.dialogSize)
    this.dialogeservice.cuoperationFunc({ key: 'recordeditId', id: '0', data: {} })
  }

  /*delete record*/
  deleteRecord(element: any) {
    this.dms.deleterecordFunction(element.id)
  }

  /*edit record*/
  editRecord(element: any) {
    this.dialoge.open(CreateupdateformComponent, this.dms.dialogSize)
    this.dialogeservice.cuoperationFunc({ key: 'recordeditId', id: element.id, data: element })
  }

  /*Logout function*/
  logoutFunction() {
    this.router.navigate(['/'])
  }

  /*Get record*/
  getrecordList() {
    this.dms.setdataService.subscribe((el: any) => {
      this.dataSource = new MatTableDataSource<any>(this.dms.viewRecord());
    })
  }



}
