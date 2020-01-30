import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {
  private userUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get(`${this.userUrl}/${username}`);
  }
}
