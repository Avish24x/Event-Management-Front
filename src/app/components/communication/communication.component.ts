// communication.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class CommunicationComponent implements OnInit {
  userInput: string = '';
  messages: { text: string; isAi: boolean }[] = [];

  private openaiApiKey = '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'; // Replace with your actual OpenAI API key

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  async sendMessage() {
    if (this.userInput.trim() === '') return;

    // Add user message to the chat
    this.messages.push({ text: this.userInput, isAi: false });

    // Get AI response
    this.getAIResponse(this.userInput).subscribe((response: any) => {
      // Add AI response to the chat
      this.messages.push({ text: response.choices[0].text.trim(), isAi: true });

      // Clear user input
      this.userInput = '';
    });
  }

  getAIResponse(userInput: string) {
    const prompt = `User: ${userInput}\nAI:`;
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // Update with the appropriate endpoint

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.openaiApiKey}`,
    });

    const requestBody = {
      prompt,
      max_tokens: 100,
    };

    return this.http.post(apiUrl, requestBody, { headers });
  }
}
