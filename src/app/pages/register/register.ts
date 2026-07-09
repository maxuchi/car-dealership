import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  fullName = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');

  errorMessage = signal('');
  successMessage = signal('');

  register(): void {
    this.errorMessage.set('');
    this.successMessage.set('');

    const fullName = this.fullName().trim();
    const email = this.email().trim();
    const password = this.password();
    const confirmPassword = this.confirmPassword();

    if (!fullName || !email || !password || !confirmPassword) {
      this.errorMessage.set('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      this.errorMessage.set('Passwords do not match.');
      return;
    }

    const registered = this.auth.register({
      fullName,
      email,
      password,
    });

    if (!registered) {
      this.errorMessage.set('An account with this email already exists.');
      return;
    }

    this.successMessage.set('Account created successfully.');

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}