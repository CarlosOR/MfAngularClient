import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfClientContentRoutingModule } from './mf-client-content-routing.module';
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';


@NgModule({
  declarations: [
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MfClientContentRoutingModule
  ]
})
export class MfClientContentModule { }
