import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: Observable <any>

  constructor(private auth: AngularFireAuth) { 
    this.user = this.auth.authState;
  }
  login(email:string, pass:string){
    this.auth.signInWithEmailAndPassword(email, pass);
  }
  authenticated():boolean {
    return this.user != null; // True ó False
   }
   // Obtener el observador del usuario actual
   get currentUser(): Observable<any> {
    return this.user;
   }
  
   signOut(): Promise<void> {
    return this.auth.signOut();
   }

}