import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { NgForm } from '@angular/forms';
import { CareerService } from '../services/career.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  jobOpenings: { title: string, description: string }[] = [];
  selectedJob: string | null = null;
  formError: string | null = null;

  constructor(private careerService: CareerService) { }

  ngOnInit(): void {
    this.loadJobOpenings();
  }

  loadJobOpenings(): void {
    // In a real application, this would likely be fetched from an API
    this.jobOpenings = [
      {
        title: 'Software Engineer',
        description: 'Develop and maintain web applications, working with the latest technologies.'
      },
      {
        title: 'Product Manager',
        description: 'Lead product development efforts and coordinate across teams to deliver top-notch products.'
      },
      {
        title: 'UI/UX Designer',
        description: 'Design user interfaces and experiences that delight users and meet business goals.'
      },
      {
        title: 'Marketing Specialist',
        description: 'Plan and execute marketing campaigns to grow the company’s brand and customer base.'
      }
    ];
  }

  applyNow(jobTitle: string): void {
    this.selectedJob = jobTitle;
    this.formError = null;
    console.log(jobTitle);
    // This method would handle the logic for applying to a job
    // alert(`You have applied for the position of ${jobTitle}`);
  }

  submitApplication(form: NgForm): void {
    // Simulate form submission
    console.log('Form submitted:', form.value);
    alert(`Application for ${this.selectedJob} submitted successfully!`);
    this.selectedJob = null;
    this.formError = null;
    if (form.invalid) {
      this.formError = 'Please fill in all required fields before submitting.';
      return;
    }
  

    const formData = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      dob: form.value.dob,
      resume: form.value.resume, // Assuming file upload handling
      jobTitle: this.selectedJob || 'vatsalya'
    };

    this.careerService.applyForJob(formData).subscribe(
      response => {
        alert(response.message);
        form.reset();
        this.selectedJob = null;
      },
      error => {
        console.error('Error:', error);
        this.formError = 'There was an error submitting your application. Please try again later.';
      }
    );
  }
}