import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  firebaseSvc = inject(FirebaseService)
  utilsSvc = inject (UtilsService)

  ngOnInit() {
  }


  //==========CERRAR SESION================
  signOut() {
    this.firebaseSvc.signOut();
  }

}
