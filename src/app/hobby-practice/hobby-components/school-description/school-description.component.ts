import { Component } from '@angular/core';
import { NavblueComponent } from "../../../shared/components/navbar/navblue/navblue.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { RouterModule } from '@angular/router';
import { RatingsComponent } from "../ratings/ratings.component";

@Component({
  selector: 'app-school-description',
  standalone: true,
  imports: [NavblueComponent, FooterComponent, RouterModule, RatingsComponent],
  templateUrl: './school-description.component.html',
  styleUrl: './school-description.component.css'
})
export class SchoolDescriptionComponent {

}
