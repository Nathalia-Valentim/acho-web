import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-nav',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './contact-nav.component.html',
  styleUrl: './contact-nav.component.css'
})
export class ContactNavComponent {
  constructor(private router: Router) {}

  navegarParaForms() {
    console.log("navegando ate o formulário...");
    this.router.navigate(['/forms_company']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }
}
