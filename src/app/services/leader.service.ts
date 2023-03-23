import { Injectable } from '@angular/core';
import { leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {baseURL} from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Observable<leader[]> {
    //let temp = this.http.get<leader[]>(baseURL + 'leadership');
    //console.log(temp);
    return this.http.get<leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
    //of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string): Observable<leader> {
    //return Promise.resolve(LEADERS.filter((lead) => (lead.id === id))[0]);
    
    return this.http.get<leader>(baseURL + 'leadership/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    //of(LEADERS.filter((lead) => (lead.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<leader> {
    //return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    return this.http.get<leader[]>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
    //of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  }

  getleaderIds(): Observable<number[] | any> {
    return this.getLeaders().pipe(map(leaders => leaders.map(leader => leader.id)))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
}
