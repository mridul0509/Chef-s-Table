import { Component, OnInit } from '@angular/core';
import { leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  lead!: leader[];

  selectedLeader!: leader;

  constructor(private leaderservice: LeaderService) { }

  ngOnInit(): void {
    this.lead = this.leaderservice.getLeaders();
  }

  onSelect(lead:leader){
    this.selectedLeader = lead;
  }

}
