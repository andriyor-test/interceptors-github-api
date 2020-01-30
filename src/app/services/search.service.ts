import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";
import {Repo} from "../models/repos.types";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private userUrl = `${environment.apiUrl}/search`;

  constructor(private http: HttpClient) { }

  users(userName): Observable<Repo[]>{
    return this.http.get<Repo[]>(`${this.userUrl}/users?q=${userName}`);
  }
}
