import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-adress-edit',
  standalone: true,
  imports: [],
  templateUrl: './no-adress-edit.component.html',
  styleUrl: './no-adress-edit.component.css'
})

export class NoAdressEditComponent {
  constructor(private router: Router) {}

  voltarParaNoAdress() {
    this.router.navigate(['../profile/enderecos'], { relativeTo: this.router.routerState.root.firstChild }); 
  }
}
