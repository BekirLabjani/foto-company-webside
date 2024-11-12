import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from '../sheared/header/header.component';
import { CouponPageComponent } from './coupon-page/coupon-page.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent,MainPageComponent,CouponPageComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
