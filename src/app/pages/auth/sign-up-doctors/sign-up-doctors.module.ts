import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpDoctorsPageRoutingModule } from './sign-up-doctors-routing.module';

import { SignUpDoctorsPage } from './sign-up-doctors.page';

import { SharedModule } from 'src/app/shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpDoctorsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [SignUpDoctorsPage]
})
export class SignUpDoctorsPageModule {}
