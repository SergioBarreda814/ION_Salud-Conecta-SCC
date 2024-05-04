import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDoctorPageRoutingModule } from './info-doctor-routing.module';

import { InfoDoctorPage } from './info-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoDoctorPageRoutingModule
  ],
  declarations: [InfoDoctorPage]
})
export class InfoDoctorPageModule {}
