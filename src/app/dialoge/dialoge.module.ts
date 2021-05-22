import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { DeleteconfirmComponent } from './deleteconfirm/deleteconfirm.component';
import { CreateupdateformComponent } from './createupdateform/createupdateform.component';



@NgModule({
  declarations: [
    DeleteconfirmComponent,
    CreateupdateformComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexModule
  ]
})
export class DialogeModule { }
