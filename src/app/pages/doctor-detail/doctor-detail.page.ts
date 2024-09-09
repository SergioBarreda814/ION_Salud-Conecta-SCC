import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController





@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.page.html',
  styleUrls: ['./doctor-detail.page.scss'],
})
export class DoctorDetailPage implements OnInit {

  public doctor: any;

  private navCtrl: NavController


  constructor(private router: Router) {
    // Aquí obtenemos los datos pasados desde la página de búsqueda
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.doctor = navigation.extras.state['doctor'];
    }
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['main/search']); // Navegamos de vuelta a /search
  }

  scheduleAppointment() {
    //this.router.navigate(['/ ']);
  }
}


