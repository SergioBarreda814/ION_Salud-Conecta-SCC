import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpDoctorsPage } from './sign-up-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpDoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpDoctorsPageRoutingModule {}
