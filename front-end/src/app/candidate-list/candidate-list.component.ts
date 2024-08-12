import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidateProfiles.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  candidates: any = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe(data => {
      this.candidates = data;
    });
  }
  viewDetails(candidate: {}) {
    console.log("candidate", candidate);
  }
}