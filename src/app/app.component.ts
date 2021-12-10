import { Component } from '@angular/core';
import { SideBarService } from './shared/services/side-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public sidebarService: SideBarService) {}
}
