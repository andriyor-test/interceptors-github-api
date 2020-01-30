import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";
import {Issue} from "../models/issues.types";

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private userUrl = `${environment.apiUrl}/repos`;

  constructor(private http: HttpClient) { }

  getIssues(fullName, page=1): Observable<Issue[]>{
    return this.http.get<Issue[]>(`${this.userUrl}/${fullName}/issues?page=${page}`);
  }
}
