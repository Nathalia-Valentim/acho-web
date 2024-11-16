import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-origin',
  standalone: true,
  imports: [ CommonModule, RouterModule, NavblueComponent, ActionBarComponent, FooterComponent ],
  templateUrl: './origin.component.html',
  styleUrl: './origin.component.css'
})
export class OriginComponent {

}
