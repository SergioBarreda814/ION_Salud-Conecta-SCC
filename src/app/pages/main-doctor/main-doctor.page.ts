import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importar ActivatedRoute
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main-doctor',
  templateUrl: './main-doctor.page.html',
  styleUrls: ['./main-doctor.page.scss'],
})
export class MainDoctorPage implements OnInit {
  doctorName: string; // Agregamos la variable doctorName

  constructor(private firebaseSvc: FirebaseService, private utilsSvc: UtilsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const uid = this.route.snapshot.paramMap.get('uid'); // Corregimos para obtener el UID correctamente
    this.firebaseSvc.getDoctorName(uid).subscribe(name => {
      this.doctorName = name;
    });
  }

  // Método para cerrar sesión
  signOut() {
    this.firebaseSvc.signOut();
  }
}
