import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  isAdminUser: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }

  navigateToCareer() {
    this.router.navigate(['/career']);
  }

  navigateToCandidateList() {
    this.router.navigate(['hr/candidates']);
  }

  ngOnInit(): void {
    // Optionally, you can add code here to fetch user-specific data
    this.autoSlide();
    this.isAdminUser = this.authService.isAdmin();
    console.log(this.isAdminUser); 
  }

  autoSlide(): void {
    const interval = setInterval(() => {
      const nextButton: HTMLElement | null = document.querySelector('.carousel-control-next');
      if (nextButton) {
        nextButton.click();
      }
    }, 5000); // Change slide every 5 seconds
  } 

  featureCards = [
    {
      title: 'Klubs',
      description: 'Connect Engage & thrive!! All you want to discuss!!!',
      imgUrl: 'assets/klub.jpeg',
      link: 'https://www.krayonnz.com/user/klub/list'
    },
    {
      title: 'Quizzes',
      description: 'Turn brain power into Money',
      imgUrl: 'assets/Quizzes.jpeg',
      link: 'https://www.krayonnz.com/user/quiz'
    },
    {
      title: 'Competitions',
      description: 'Battles for bucks! Your skills pays the bill',
      imgUrl: 'assets/Competitions.jpeg',
      link: 'https://www.krayonnz.com/user/talent-hunt'
    }
  ];
}