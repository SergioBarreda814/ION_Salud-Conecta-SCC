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
  private allDocuments: any[] = [];

  constructor(private firebaseService: FirebaseService, private navCtrl: NavController) { }

  ngOnInit() {
    this.getDocuments('doctors_centers');
  }

  getDocuments(collectionPath: string) {
    this.firebaseService.getCollectionData(collectionPath).subscribe((data: any[]) => {
      this.documents = data;
      this.allDocuments = data;
    });
  }

  filterDocuments($event) {

    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();

    if (!searchTerm) {
      this.documents = this.allDocuments; // Mostrar todos si el campo de búsqueda está vacío
      return;
    }
    // Función para normalizar y eliminar acentos
    const normalizeText = (text: string) =>
      text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    this.documents = this.allDocuments.filter(doc => {
      const nameMatch = normalizeText(doc.Name).includes(normalizeText(searchTerm));
      const direccionMatch = normalizeText(doc.Direccion).includes(normalizeText(searchTerm));
      const telefonoMatch = normalizeText(doc.Telefono).includes(normalizeText(searchTerm));
      const especialidadesMatch = doc.Especialidades.some((especialidad: string) =>
        normalizeText(especialidad).includes(normalizeText(searchTerm))
      );

      return nameMatch || direccionMatch || telefonoMatch || especialidadesMatch;
    });
  }

  goToDetail(doc: any) {
    // Navega a la pantalla de detalles, pasando la información del doctor seleccionado
    this.navCtrl.navigateForward('/doctor-detail', { state: { doctor: doc } });
  }
}
