// Dentro de tu página de búsqueda (search.page.ts)

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public documents: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.getDocuments('doctors_centers');
  }

  getDocuments(collectionPath: string) {
    this.firebaseService.getCollectionData(collectionPath).subscribe((data: any[]) => {
      this.documents = data;
    });
  }

  filterDocuments($event){
    
  }

  
}
