import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorDetailPage } from './doctor-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorDetailPageRoutingModule {}
