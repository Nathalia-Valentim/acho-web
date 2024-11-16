import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { LoginDashboardComponent } from "./login-dashboard/login-dashboard.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, LoginDashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  navegarParaCadastro() {
    console.log("Tentando navegar para a tela de cadastro...");
    this.router.navigate(['/sign-up']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }

  navegarParaHome() {
    console.log("Tentando navegar para a tela de cadastro...");
    this.router.navigate(['/home']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }
}
