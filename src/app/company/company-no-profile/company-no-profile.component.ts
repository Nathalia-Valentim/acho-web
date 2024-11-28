import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-company-no-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './company-no-profile.component.html',
  styleUrl: './company-no-profile.component.css'
})
export class CompanyNoProfileComponent {
  constructor(private router: Router) {}

  voltarParaNoAdress() {
    this.router.navigate(['/company/perfil']);
  }
}

