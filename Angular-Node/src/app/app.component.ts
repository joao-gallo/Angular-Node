import { Component } from '@angular/core';
import { DivService } from './services/div.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Node';
  showDiv = true;

  constructor(public divService: DivService) {
    this.divService.setShowDiv(true);
  }

}
