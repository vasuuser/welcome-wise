import { Component } from '@angular/core';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent {

  // Define the list of competitions
  competitionList = [
    {
      name: 'Coding Challenge',
      description: 'Test your coding skills in this exciting competition.',
      date: 'August 15, 2024'
    },
    {
      name: 'Math Olympiad',
      description: 'Compete with others in solving challenging math problems.',
      date: 'September 1, 2024'
    },
    {
      name: 'Science Fair',
      description: 'Showcase your science project in this annual fair.',
      date: 'October 10, 2024'
    },
    // Add more competitions as needed
  ];

  // Method to handle competition registration action
  registerCompetition(competition: any) {
    console.log(`Registering for ${competition.name}`);
    // Implement further logic, e.g., navigate to a registration page, etc.
  }
}