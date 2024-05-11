import { Injectable } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Router } from '@angular/router';
import { getAuth, GoogleAuthProvider, signInWithPopup, AuthError, UserCredential } from 'firebase/auth'; // Importa las funciones necesarias de Firebase Auth

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { 
    this.initializeGoogleAuth();
  }

  initializeGoogleAuth() {
    GoogleAuth.initialize({
      clientId: '32986392230-dophoh7feaa5m50fad4ng296ibdkmfkp.apps.googleusercontent.com', // Reemplaza 'TU_CLIENT_ID' con tu ID de cliente de Google
      scopes: ['email', 'profile']
    });
  }

  async loginWithGoogle() {
    try {
      const auth = getAuth(); // Obtén el objeto de autenticación
      const provider = new GoogleAuthProvider();
      const result: UserCredential = await signInWithPopup(auth, provider); // Usa signInWithPopup para iniciar sesión con Google
      // Accede a la información del usuario usando result.user
      console.log('Usuario autenticado:', result.user);

      // Después de autenticarse correctamente, navega a la página 'home'
      console.log('Intentando cambiar a la página home...');
      this.router.navigate(['/main/profile']);
      console.log('...................');

    } catch (error: any) {
      const errorCode = (error as AuthError).code;
      const errorMessage = (error as AuthError).message;
      console.error(`Error al iniciar sesión con Google (${errorCode}): ${errorMessage}`);
    }
  }
}
