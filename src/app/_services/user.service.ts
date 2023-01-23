import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  onLogin(formValue: any) {
    console.log(formValue)
    localStorage.setItem('username', formValue.username);
    localStorage.setItem('password', formValue.password);
    
  }
  onLogout() {
    localStorage.removeItem('loginUser');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("name");
  }

  setLoading(loading: boolean): void {
    
    if (loading === true) {
      this.loadingSub.next(true);
    }
    if (loading === false) {
      this.loadingSub.next(false);
    }
  }
}
