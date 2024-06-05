import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  pages = [
    {title: 'Perfil', url: '/main/profile', icon: 'person-circle-outline'},
    {title: 'Buscar', url: '/main/search', icon: 'search-outline'},
    {title: 'Citas', url: '/main/appointments', icon: 'calendar-outline'}
  ]

  router = inject(Router);
  firebaseSvc = inject(FirebaseService)
  utilsSvc = inject (UtilsService)
  currentPath: string = '';
  

  ngOnInit() {
    this.router.events.subscribe((event: any) =>{

      if(event?.url) this.currentPath = event.url;

    })
  }

  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

//================CERRAR SESION====================
signOut(){
this.firebaseSvc.signOut();
}

}
