import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { FilterComponent } from '../filter/filter.component';
import { MapsComponent } from '../maps/maps.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-practiceyourhobby',
  standalone: true,
  imports: [CommonModule, RouterModule, NavblueComponent, ActionBarComponent, FilterComponent, MapsComponent, FooterComponent],
  templateUrl: './practiceyourhobby.component.html',
  styleUrl: './practiceyourhobby.component.css'
})
export class PracticeyourhobbyComponent {

}
