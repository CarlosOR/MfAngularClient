import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { TableComponent } from './pages/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfClientContentRoutingModule { }
