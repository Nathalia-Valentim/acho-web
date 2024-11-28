import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { Router } from '@angular/router';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [ FormsModule, GoogleMapsModule, CommonModule, ResultComponent],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent {

  showResults: boolean = false;

}
