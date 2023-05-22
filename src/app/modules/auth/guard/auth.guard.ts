import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const cookieName = 'myCookie'; // Replace with your desired cookie name

    // Check if the cookie exists
    if (this.checkCookie(cookieName)) {
      return true; // Allow navigation
    } else {
      // Redirect to a different route or show an error page
      this.router.navigate(['/auth/login']); // Replace '/login' with your desired route
      return false; // Block navigation
    }
  }

  private checkCookie(cookieName: string): boolean {
    const cookies = document.cookie.split(';');

    // Search for the specified cookie
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');

      // Trim any leading or trailing spaces
      const cookieNameTrimmed = name.trim();

      // Check if the cookie name matches
      if (cookieNameTrimmed === cookieName) {
        return true; // Cookie found
      }
    }

    return false; // Cookie not found
  }
}
