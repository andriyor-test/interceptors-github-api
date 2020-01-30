import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";
import {Repo} from "../models/repos.types";

@Injectable({
  providedIn: 'root'
})
export class GithubRepoService {
  private userUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  getPersonalRepos(page): Observable<Repo[]>{
    return this.http.get<Repo[]>(`${this.userUrl}/user/repos?page=${page}`);
  }

  getUserRepos(userName, page=1): Observable<Repo []> {
    return this.http.get<Repo[]>(`${this.userUrl}/users/${userName}/repos?page=${page}`)
  }

}
