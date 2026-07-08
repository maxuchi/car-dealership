import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  imports: [FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
  private readonly http = inject(HttpClient);

  message = signal('');
  messages = signal<{ sender: string; text: string }[]>([]);

  isOpen = signal(false);
  isLoading = signal(false);

  private readonly webhookUrl =
    'http://localhost:5678/webhook/car-chat';

  toggleChat(): void {
    this.isOpen.update((value) => !value);
  }

  closeChat(): void {
    this.isOpen.set(false);
  }

  sendMessage(): void {
    const currentMessage = this.message().trim();

    if (!currentMessage || this.isLoading()) {
      return;
    }

    this.messages.update((messages) => [
      ...messages,
      { sender: 'user', text: currentMessage },
    ]);

    this.message.set('');
    this.isLoading.set(true);

    const body = {
      message: currentMessage,
      sessionId: 'angular-user-1',
    };

    this.http.post<{ reply: string }>(this.webhookUrl, body).subscribe({
      next: (response) => {
        this.messages.update((messages) => [
          ...messages,
          { sender: 'bot', text: response.reply },
        ]);

        this.isLoading.set(false);
      },

      error: (error) => {
        console.error('Chatbot error:', error);

        this.messages.update((messages) => [
          ...messages,
          {
            sender: 'bot',
            text: 'Sorry, something went wrong. Please try again.',
          },
        ]);

        this.isLoading.set(false);
      },
    });
  }
}