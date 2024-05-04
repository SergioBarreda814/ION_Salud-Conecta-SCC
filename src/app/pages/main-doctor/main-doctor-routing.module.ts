import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainDoctorPage } from './main-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: MainDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDoctorPageRoutingModule {}
