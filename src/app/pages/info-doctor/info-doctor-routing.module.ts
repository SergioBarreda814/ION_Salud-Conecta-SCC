import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoDoctorPage } from './info-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: InfoDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoDoctorPageRoutingModule {}
