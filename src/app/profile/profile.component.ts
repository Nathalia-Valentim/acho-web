import { Component } from '@angular/core';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { NavbarComponent } from "../shared/components/navbar/navbar.component";
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, ProfileinfoComponent, SidebarComponent, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
