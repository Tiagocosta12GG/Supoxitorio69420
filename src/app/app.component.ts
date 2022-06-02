import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu', url: '/menu', icon: 'grid' },
    { title: 'Trending Places', url: '/tp', icon: 'flame' },
    { title: 'Favorite Places', url: '/folder/Favorites', icon: 'heart' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

}
