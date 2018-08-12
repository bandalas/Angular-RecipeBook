import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickedFeature = 'recipe';

  onNavigate(feature:string){
    this.clickedFeature = feature;
  }
}
