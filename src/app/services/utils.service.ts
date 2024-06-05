import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, LoadingController, ToastController, ToastOptions } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);
  alertController = inject(AlertController);

 async takePicture(promptLabelHeader: string){
  return await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Prompt,
    promptLabelHeader,
    promptLabelPhoto: 'Selecciona una imagen',
    promptLabelPicture: 'Toma una foto'
  });
};


  //=====LOADING========
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }

  //=======TOAST========
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  //=====Enruta a cualquier página disponible====
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  //===========GUARDAR EN LOCAL STORAGE========
  SaveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  //==========OBETENER DE LOCAL STORAGE========
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }


//==========ALERT==============
  async presentAlert(opts: AlertOptions) {
    const alert = await this.alertController.create(opts);
  
    await alert.present();
  }
}
