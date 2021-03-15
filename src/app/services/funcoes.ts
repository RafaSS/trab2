import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Funcoes {

  constructor(
    private router: Router
  ) {

  }

  logout() {
    if (JSON.parse(localStorage.getItem('user'))) {
      localStorage.removeItem('user');
      this.router.navigate(['/auth/login']);
    }
  }

}

