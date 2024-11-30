import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent implements OnInit {
  selectedButton: string = '';
  sidebarVisible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sidebarVisible = false; // Garantir que comece fechada
    this.updateSelectedButton();
    this.router.events
    
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.updateSelectedButton();
    });
  }

  updateSelectedButton() {
    const currentRoute = this.router.url;
    if (currentRoute.includes('dados')) {
      this.selectedButton = 'dados';
    } else if (currentRoute.includes('enderecos')) {
      this.selectedButton = 'endereco';
    } else if (currentRoute.includes('favoritos')) {
      this.selectedButton = 'favoritos';
    } else if (currentRoute.includes('authsessions')) {
      this.selectedButton = 'autenticacao';
    } else if (currentRoute.includes('notificacoes')) {
      this.selectedButton = 'notificacoes';
    } else {
      this.selectedButton = '';
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    this.router.navigate(['/home']);
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
    const sidebarElement = document.querySelector('.retangulo');
    if (this.sidebarVisible) {
      sidebarElement?.classList.remove('hidden');
    } else {
      sidebarElement?.classList.add('hidden');
    }
  }
}