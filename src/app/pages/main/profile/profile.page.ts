import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userProfile: User;

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  user(): User {
    return this.userProfile;
  }

  async takeImage() {
    let user = this.userProfile;
    let path = `users/${user.uid}`

    const dataUrl = (await this.utilsSvc.takePicture('Imagen de Perfil')).dataUrl;

    const loading = await this.utilsSvc.loading();
    await loading.present();

    let imagePath = `${user.uid}/profile`;
    user.image = await this.firebaseSvc.uploadImage(imagePath, dataUrl);
  
    this.firebaseSvc.updateDocument(path, {image: user.image}).then(async res => {
      
      this.utilsSvc.SaveInLocalStorage('user', user)

      this.utilsSvc.presentToast({
        message: 'Foto actualizada exitosamente',
        duration: 1500,
        color: 'success',
        position: 'middle',
        icon: 'checkmark-circle-outline'
      })
    }).catch(error => {
      console.log(error);
      
      this.utilsSvc.presentToast({
        message: error.message,
        duration: 2500,
        color: 'primary',
        position: 'middle',
        icon: 'alert-circle-outline'
      })
    }).finally(() => {
      loading.dismiss();
    })
  }

  getUser() {
    this.userProfile = this.utilsSvc.getFromLocalStorage('user');
  }

  signOut() {
    this.utilsSvc.presentAlert({
      header: 'Cerrar Sesión',
      message: '¿Quieres Cerrar sesión?',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Sí, cerrar',
          handler: () => {
            this.firebaseSvc.signOut();
          }
        }
      ]
    });
  }
}
