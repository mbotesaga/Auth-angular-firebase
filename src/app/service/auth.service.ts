import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  // Login Method

  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then(  () =>{
      localStorage.setItem('token', 'true');
      this.router.navigate(['dashboard'])
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  // register Method
  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(()=>{
      alert('Registration successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // Logout Method
  logout(){
    this.fireauth.signOut().then(() =>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      
    })
  }
}
