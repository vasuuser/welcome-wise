import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './services/auth.guard';
import { DetailComponent } from './detail/detail.component';
import { KlubListComponent } from './klub-list/klub-list.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { CareerComponent } from './career/career.component'; // Import the Career component
import { CandidateListComponent } from './candidate-list/candidate-list.component';


const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'klubs', component: KlubListComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'competitions', component: CompetitionListComponent },
  { path: 'career', component: CareerComponent }, // Add route for Career page
  { path: 'hr/candidates', component: CandidateListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
