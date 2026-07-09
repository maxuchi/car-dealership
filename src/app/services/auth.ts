import { Injectable } from '@angular/core';

export interface User {
  fullName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly usersKey = 'premium-motors-users';
  private readonly currentUserKey = 'premium-motors-current-user';

  getUsers(): User[] {
    const users = localStorage.getItem(this.usersKey);

    if (!users) {
      return [];
    }

    return JSON.parse(users) as User[];
  }

  register(user: User): boolean {
    const users = this.getUsers();

    const userExists = users.some(
      (existingUser) =>
        existingUser.email.toLowerCase() === user.email.toLowerCase(),
    );

    if (userExists) {
      return false;
    }

    users.push(user);

    localStorage.setItem(this.usersKey, JSON.stringify(users));

    return true;
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();

    const user = users.find(
      (existingUser) =>
        existingUser.email.toLowerCase() === email.toLowerCase() &&
        existingUser.password === password,
    );

    if (!user) {
      return false;
    }

    localStorage.setItem(this.currentUserKey, JSON.stringify(user));

    return true;
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem(this.currentUserKey);

    if (!user) {
      return null;
    }

    return JSON.parse(user) as User;
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }
}