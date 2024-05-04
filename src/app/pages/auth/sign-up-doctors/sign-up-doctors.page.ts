import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.module';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up-doctors',
  templateUrl: './sign-up-doctors.page.html',
  styleUrls: ['./sign-up-doctors.page.scss'],
})
export class SignUpDoctorsPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService)

  ngOnInit() {
  }

  async submit() {

    if (this.form.valid) {

      const loading = await this.utilsSvc.loading()
      await loading.present();

      this.firebaseSvc.signIn(this.form.value as User).then(res => {

        this.getUserInfo(res.user.uid);
      
      
      
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


  }


  async getUserInfo(uid: string) {

    if (this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      let path = `users/${uid}`;

      this.firebaseSvc.getDocument(path).then( (user: User) => {

        this.utilsSvc.SaveInLocalStorage('user', user);
        this.utilsSvc.routerLink('/main-doctor');
        this.form.reset();

        this.utilsSvc.presentToast({
          message: `Te damos la bienvenida ${user.name}`,
          duration: 1500,
          color: 'primary',
          position: 'middle',
          icon: 'person-circle-outline'
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


  }
}