import { Component } from '@angular/core';
import { HEROES } from "./shared/heroes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'odev1';
  routerinfo:string;
  heroArray = HEROES;

  updateTitle(title:string) {
    this.title = title;
  }

  updateRouteInfo(info:string) {
    this.routerinfo = info;
  }
}
