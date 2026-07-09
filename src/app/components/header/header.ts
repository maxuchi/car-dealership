import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  menuOpen = false;

  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  get currentUserName(): string {
    return this.auth.getCurrentUser()?.fullName ?? '';
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  logout(): void {
    this.auth.logout();

    this.closeMenu();

    this.router.navigate(['/']);
  }
}