import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export  class ActivateGuard implements CanActivate {

  private can: boolean = false;
  
  canActivate() {
    console.log('ActivateGuard#canActivate called, can: ', this.can);
    if (!this.can) {
      alert('No Authorization');
      return false;
    }

    return true;
  }

  setCanActivate(can) {
    this.can = can;
  }
}