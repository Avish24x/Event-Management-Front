import { Injectable } from '@angular/core';
import { OpenAI, ClientOptions } from 'openai'; // Make sure to import ClientOptions

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openaiInstance: any;

  constructor() {
    // Create a variable to hold your API key
    const apiKey = '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';

    // Provide the API key as a value of type ClientOptions
    const clientOptions: ClientOptions = {
      apiKey: apiKey
    };

    // Initialize OpenAI instance with the provided client options
    this.openaiInstance = new OpenAI(clientOptions);
  }
  async getAIResponse(query: string): Promise<string> {
    try {
      // Call the OpenAI API to get the response
      const response = await this.openaiInstance.complete({
        engine: 'text-davinci-002', // Specify the model to use
        prompt: query,
        max_tokens: 100 // Max tokens for the response
      });

      // Return the AI's response
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error getting AI response:', error);
      return 'Sorry, I encountered an error. Please try again later.';
    }
  }
  // Implement the rest of your service methods...
}
