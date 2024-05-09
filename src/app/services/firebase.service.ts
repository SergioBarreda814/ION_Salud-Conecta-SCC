import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.module';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore'
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore)
  utilsSvc = inject(UtilsService)
  //===========AUTENTICACION==========
  getAuth() {
    return getAuth();
  }

  //==========ACCEDER===========
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //==========CREAR USUARIO===========
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //==========ACTUALIZAR USUARIO=========
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName })
  }

  //===========RECUPERACIÓN DE CONTRASEÑA==========
  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email)
  }

  //============CERRRAR SESION==========
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/welcome');
  }


  //================BASE DE DATOS===========

  //==========SETEAR DOCUMENTO================
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  //==========OBTENER DOCUMENTO==============
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }


//Prueba // Nombre de doctor.
getDoctorName(uid: string): Observable<string> {
  return this.firestore.collection('doctors_centers').doc(uid).valueChanges().pipe(
    map((doc: any) => {
      return doc.Name; // Suponiendo que el campo se llama "name"
    })
  );
} 
}
