import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { LoginDashboardComponent } from '../login/login-dashboard/login-dashboard.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NavbarComponent, LoginDashboardComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router: Router) {}

  navegarParaLogin() {
    console.log("Navegando para a tela de login");
    this.router.navigate(['/login']).then(success => {
      if (success) {
        console.log('Navegação bem-sucedida');
      } else {
        console.log('Falha na navegação');
      }
    });
  }
}
