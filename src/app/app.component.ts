import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    {
      title: 'Neat Tree',
      content: 'Saws this awesome tree during my hike today.',
      imageUrl: 'assets/tree.jpg',
      username: 'nature'
    },
    {
      title: 'Huge mountain',
      content: 'Here is a picture of a huge mountain',
      imageUrl: 'assets/mountain.jpg',
      username: 'mountainlover'
    },
    {
      title: 'Hiking',
      content: 'That was is a very cool hiking today.',
      imageUrl: 'assets/hiking.jpg',
      username: 'nature'
    }
  ]
}
