import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ActionBarComponent } from '../../hobby-components/action-bar/action-bar.component';
import { FilterComponent } from '../../hobby-components/filter/filter.component';
import { MapsComponent } from "../../hobby-components/maps/maps.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { RatingsComponent } from "../../hobby-components/ratings/ratings.component";
import { PracticeyourhobbyComponent } from "../../hobby-components/practiceyourhobby/practiceyourhobby.component";
import { OriginComponent } from "../../hobby-components/origin/origin.component";



@Component({
  selector: 'app-football-page',
  standalone: true,
  imports: [NavblueComponent, ActionBarComponent, FilterComponent, MapsComponent, FooterComponent, RatingsComponent, RouterModule, PracticeyourhobbyComponent, OriginComponent],
  templateUrl: './football-page.component.html',
  styleUrl: './football-page.component.css'
})
export class FootballPageComponent {

}
