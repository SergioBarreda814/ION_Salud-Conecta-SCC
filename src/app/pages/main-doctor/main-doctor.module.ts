import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainDoctorPageRoutingModule } from './main-doctor-routing.module';

import { MainDoctorPage } from './main-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainDoctorPageRoutingModule
  ],
  declarations: [MainDoctorPage]
})
export class MainDoctorPageModule {}
