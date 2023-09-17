import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuOpen = false;
  subMenusOpen: { [key: string]: boolean } = {};
   menuItems = [
       {
           label: 'Soluciones',
           routerLink: '/',
           subMenu: [
               // Agrega aquí los elementos del submenú para "Soluciones"
               { label: 'Submenú 1', routerLink: '/submenu1' },
               { label: 'Submenú 2', routerLink: '/submenu2' },
               // ...
           ]
       },
       {
           label: 'Industrias',
           routerLink: '/',
           subMenu: [
               // Agrega aquí los elementos del submenú para "Industrias"
               // ...
           ]
       },
       {
           label: 'Nosotros',
           routerLink: '/',
           subMenu: [
               // Agrega aquí los elementos del submenú para "Nosotros"
               { label: 'Sobre nosotros', routerLink: './about' },
               { label: 'Clientes', routerLink: './clientes' },
               { label: 'Contacto', routerLink: './contacto' },
               // ...
           ]
       },
       {
           label: 'Utilidades',
           routerLink: '/',
           subMenu: [
               // Agrega aquí los elementos del submenú para "Utilidades"
               { label: 'Capacitacion', routerLink: './capacitaciones' },
               { label: 'Cuenta corriente On-Line', routerLink: '/' },
               { label: 'Descargas', routerLink: './descargas' },
               { label: 'Noticias', routerLink: './blog' },
               // ...
           ]
       },
   ];

  constructor(
    public router: Router
    ) { 
      
    }
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
   }
   toggleSubMenu(index: number) {
    // Abre o cierra el submenú correspondiente según su estado actual
    const subMenuKey = `subMenu${index}`;
    this.subMenusOpen[subMenuKey] = !this.subMenusOpen[subMenuKey];
}
  ngOnInit(): void {
  }

}
