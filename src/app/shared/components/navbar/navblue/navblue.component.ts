import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navblue',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navblue.component.html',
  styleUrl: './navblue.component.css'
})
export class NavblueComponent {
  @Input() categoryName: string = '';
  @Input() categoryImage: string = ''; 
}

