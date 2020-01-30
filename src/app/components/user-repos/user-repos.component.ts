import { Component, OnInit } from '@angular/core';
import {GithubRepoService} from "../../services/repo.service";
import {Repo} from '../../models/repos.types';
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-github-users',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {
  repos: Repo[] = [];
  currentPage = 1;
  url = new BehaviorSubject<string>(`${environment.apiUrl}/user/repos`);


  constructor(private githubRepoService: GithubRepoService) { }

  ngOnInit() {
    this.githubRepoService.getPersonalRepos(this.currentPage).subscribe(repos => {
      this.repos = repos;
    })
  }

  onScroll () {
    this.currentPage += 1;
    this.githubRepoService.getPersonalRepos(this.currentPage).subscribe(repos => {
      this.repos = [...this.repos, ...repos];
    })
  }

}
