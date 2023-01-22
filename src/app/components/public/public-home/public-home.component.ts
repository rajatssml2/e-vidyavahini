import { Component } from '@angular/core';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css']
})
export class PublicHomeComponent {
  slides = [
    { img: '../../../../assets/images/slider_img_3.png' },
    { img: '../../../../assets/images/slider_img_4.png' }
  ];
  slideConfig:any = {
    "slidesToShow": 1, "slidesToScroll": 1, "dots": true, "autoplay": true, 'responsive': [
      {
        'breakpoint': 767,
        settings: {
          arrows: false,
        }
      }
    ]
  };

}
