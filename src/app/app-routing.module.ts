import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  // { path: '', component: TdfComponent },
  // { path: 'employee/:id', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
