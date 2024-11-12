import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WebsideServiceService } from './../../webside-service.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navigationLink = this.appDataService.navigationLink; // Correct variable name

  activeLinkIndex: number | null = 0;


  constructor(private appDataService: WebsideServiceService) {

  }

  setActiveLink(index: number):void {
    this.activeLinkIndex = index;
  }
}
