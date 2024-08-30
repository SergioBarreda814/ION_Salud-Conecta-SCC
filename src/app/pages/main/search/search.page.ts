import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service'; // Asegúrate de que la ruta sea correcta
import { NavController } from '@ionic/angular'; // Importa NavController para navegación

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public documents: any[] = [];

  constructor(private firebaseService: FirebaseService, private navCtrl: NavController) {}

  ngOnInit() {
    this.getDocuments('doctors_centers');
  }

  getDocuments(collectionPath: string) {
    this.firebaseService.getCollectionData(collectionPath).subscribe((data: any[]) => {
      this.documents = data;
    });
  }

  filterDocuments($event){
    // Implementa el filtrado según sea necesario
  }

  goToDetail(doc: any) {
    // Navega a la pantalla de detalles, pasando la información del doctor seleccionado
    this.navCtrl.navigateForward('/doctor-detail', { state: { doctor: doc } });
  }
}
