import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(

  ){}

  @ViewChild('navBurger', {static: true}) navBurger: ElementRef;
  @ViewChild('navMenu', {static: true}) navMenu: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  toggleAsideMenu() {
    
  }
}