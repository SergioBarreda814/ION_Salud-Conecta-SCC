import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main-doctor',
  templateUrl: './main-doctor.page.html',
  styleUrls: ['./main-doctor.page.scss'],
})
export class MainDoctorPage implements OnInit {
  firebaseSvc = inject(FirebaseService)
  utilsSvc = inject (UtilsService)

  ngOnInit() {
  }


  //==========CERRAR SESION================
  signOut() {
    this.firebaseSvc.signOut();
  }

}
