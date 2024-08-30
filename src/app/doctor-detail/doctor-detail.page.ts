import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.page.html',
  styleUrls: ['./doctor-detail.page.scss'],
})
export class DoctorDetailPage implements OnInit {

  public doctor: any;

  constructor(private router: Router) {
    // Obtiene los datos del estado de navegación
    if (this.router.getCurrentNavigation().extras.state) {
      this.doctor = this.router.getCurrentNavigation().extras.state['doctor'];
    }
  }

  ngOnInit() {}

}
