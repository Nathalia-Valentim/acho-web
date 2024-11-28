import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, RouterModule, NavblueComponent, ActionBarComponent, FooterComponent ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {

}
