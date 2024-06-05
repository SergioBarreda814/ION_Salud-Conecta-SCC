import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc, collection, collectionData, query, updateDoc } from '@angular/fire/firestore'
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore)
  utilsSvc = inject(UtilsService)
  storage = inject(AngularFireStorage)


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


  //=======OBTENER DOCUMENTOS DE UNA COLECCIÓN=====
  getCollectionData(path: string, collectionQuery?: any) {
    const ref = collection(getFirestore(), path)
    return collectionData(query(ref, collectionQuery), { idField: 'id' })
  }

  //==========SETEAR DOCUMENTO================
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }


    //==========Actualizar DOCUMENTO================
    updateDocument(path: string, data: any) {
      return updateDoc(doc(getFirestore(), path), data);
    }

  //==========OBTENER DOCUMENTO==============
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  //=========AGREGAR DOCUMENTO===============
  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }




  //==============ALMACENAMIENTO============


  //====SUBIR IMAGEN====
  async uploadImage(path: string, data_url: string) {
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(() => {
      return getDownloadURL(ref(getStorage(), path))
    })
  }



  //=======OBTENER LA RUTA DE LA IMAGEN CON SU URL======
  getFilePath(url: string) {
    return ref(getStorage(), url).fullPath
  }
}
