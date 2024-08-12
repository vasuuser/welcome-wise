import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DetailComponent } from './detail/detail.component';
import { KlubListComponent } from './klub-list/klub-list.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { CareerComponent } from './career/career.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    DetailComponent,
    KlubListComponent,
    QuizListComponent,
    CompetitionListComponent,
    CareerComponent,
    CandidateListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
