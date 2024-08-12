import { Component } from '@angular/core';

@Component({
  selector: 'app-klub-list',
  templateUrl: './klub-list.component.html',
  styleUrls: ['./klub-list.component.scss']
})
export class KlubListComponent {
  successMessage: string = '';
  // Define the list of Klubs
  klubList = [
    {
      name: 'Photography Klub',
      description: 'Join us to explore the world of photography.'
    },
    {
      name: 'Book Reading Klub',
      description: 'A place for book lovers to share and discuss.'
    },
    {
      name: 'Coding Klub',
      description: 'Collaborate with others to enhance your coding skills.'
    },
    // Add more Klubs as needed
  ];

  // Method to handle Klub join action
  joinKlub(klub: any) {
    klub.joined = true; // Mark the klub as joined
    this.successMessage = `You have successfully joined the ${klub.name}!`;

    // Implement further logic, e.g., navigate to a detailed page, etc.
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }
}