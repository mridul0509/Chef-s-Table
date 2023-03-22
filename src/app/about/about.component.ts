import { Component, OnInit, Inject } from '@angular/core';
import { leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {

  lead!: leader[];
  errMess! : string;

  constructor(private leaderservice: LeaderService,
    @Inject('BaseURL') public BaseURL : string) { }

  ngOnInit() {
    this.leaderservice.getLeaders().subscribe({ next: lead => this.lead = lead,
      error : errMess => this.errMess = <any>errMess
    });
  }

}
