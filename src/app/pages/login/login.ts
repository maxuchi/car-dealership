import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  email = signal('');
  password = signal('');
  errorMessage = signal('');

  login(): void {
    this.errorMessage.set('');

    const email = this.email().trim();
    const password = this.password();

    if (!email || !password) {
      this.errorMessage.set('Please enter your email and password.');
      return;
    }

    const loggedIn = this.auth.login(email, password);

    if (!loggedIn) {
      this.errorMessage.set('Invalid email or password.');
      return;
    }

    this.router.navigate(['/']);
  }
}