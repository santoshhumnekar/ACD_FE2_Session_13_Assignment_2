import { Component, OnInit } from '@angular/core';
import { ActivateGuard } from '../activate-gaurd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private activateGuard:ActivateGuard) { }

 checkboxChanged(canActivate) {
    // Update guard when checkbox checked.
    this.activateGuard.setCanActivate(canActivate);
  }

  ngOnInit() {
  }

}
