import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/components/navbar/navbar.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { CompanySidebarComponent } from './company-sidebar/company-sidebar.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-company',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CompanySidebarComponent, RouterModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

}
