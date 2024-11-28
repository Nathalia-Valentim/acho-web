import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adress',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './adress.component.html',
  styleUrl: './adress.component.css'
})
export class AdressComponent {
}
