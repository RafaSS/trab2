import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
   public appPages = [
     { title: 'Contas', url: '/conta', icon: 'people' },
     { title: 'Tipos de conta', url: '/tipo', icon: 'book' },
   ];

  constructor(
    private platform: Platform,

    private router: Router
  ) {
   
  }

}

