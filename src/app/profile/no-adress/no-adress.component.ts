import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-no-adress',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './no-adress.component.html',
  styleUrl: './no-adress.component.css'
})

export class NoAdressComponent {
  constructor(private router: Router) {}

  voltarParaNoAdress() {
    this.router.navigate(['/profile/enderecos']);
  }
}
