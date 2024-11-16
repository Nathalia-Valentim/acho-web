import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-fundamentals',
  standalone: true,
  imports: [ CommonModule, RouterModule, NavblueComponent, ActionBarComponent, FooterComponent ],
  templateUrl: './fundamentals.component.html',
  styleUrl: './fundamentals.component.css'
})
export class FundamentalsComponent {

}
