import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [RouterModule, FooterComponent, SidebarComponent, NavbarComponent],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent {
  constructor(private router: Router) {}

  navegarParaProfile () {
    console.log("Ir para Perfil");
    this.router.navigate(['/profile'])
  }
}
