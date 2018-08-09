import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardChildService implements CanActivateChild {

  private isAuthenticated: boolean = true;

  canActivateChild() {
    return this.isAuthenticated;
  }
}
