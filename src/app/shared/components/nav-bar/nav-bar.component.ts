import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  toggleProfileDropdown:boolean=false;
  
  constructor(public sidebarService:SideBarService) { }

  ngOnInit() {
  }

}
