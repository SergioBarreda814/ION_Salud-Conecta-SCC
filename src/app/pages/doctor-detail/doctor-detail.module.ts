import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorDetailPageRoutingModule } from './doctor-detail-routing.module';

import { DoctorDetailPage } from './doctor-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorDetailPageRoutingModule
  ],
  declarations: [DoctorDetailPage]
})
export class DoctorDetailPageModule {}
