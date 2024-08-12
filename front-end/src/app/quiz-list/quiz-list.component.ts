import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent {

  // Define the list of quizzes
  quizList = [
    {
      title: 'General Knowledge Quiz',
      description: 'Test your general knowledge with this quiz.'
    },
    {
      title: 'Science Quiz',
      description: 'Explore the wonders of science with this quiz.'
    },
    {
      title: 'History Quiz',
      description: 'Dive into the past and challenge your history knowledge.'
    },
    // Add more quizzes as needed
  ];

  // Method to handle quiz taking action
  takeQuiz(quiz: any) {
    console.log(`Taking ${quiz.title}`);
    // Implement further logic, e.g., navigate to the quiz page, etc.
  }
}