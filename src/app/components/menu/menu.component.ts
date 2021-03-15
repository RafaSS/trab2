import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public appPages = [
    {title: 'Contas', url: '/conta', icon: 'people'},
    {title: 'Tipos de conta', url: '/tipo', icon: 'book'},
  ];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  verificar(url: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.router.navigate([url]);
    } else {
      alert('Você precisa estar logado');
    }
  }
}
