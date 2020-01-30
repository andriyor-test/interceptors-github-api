import { Component, OnInit } from '@angular/core';
import {IssueService} from '../../services/issue.service';
import {BehaviorSubject, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, filter} from "rxjs/operators";
import {SearchService} from '../../services/search.service';
import {User} from "../../models/user.types";
import {Issue} from "../../models/issues.types";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  userName;
  users: User[] = [];
  userNameUpdate = new Subject<string>();
  currentIssuesPage = 1;
  issues: Issue[] = [];
  selectedRepoName: string;
  reposUrl = new Subject<string>();
  isLoading = new BehaviorSubject<string>('');

  constructor(
    private issueService: IssueService,
    private searchService: SearchService,
  ) {
  }

  ngOnInit() {
    this.userNameUpdate.pipe(
      filter(Boolean),
      debounceTime(800),
      distinctUntilChanged())
      .subscribe(value => {
        this.updateUsers(value);
      });
  }

  updateUsers(userName) {
    this.isLoading.next('1');
    this.searchService.users(userName).subscribe(users => {
      this.isLoading.next('');
      this.users = users['items'];
    })
  }

  onUserSelect(userName) {
    this.reposUrl.next(`${environment.apiUrl}/users/${userName}/repos`)
  }

  onRepoSelect(item) {
    this.isLoading.next('2');
    this.selectedRepoName = item.full_name;
    this.issueService.getIssues(this.selectedRepoName).subscribe(issues => {
      this.issues = issues;
      this.isLoading.next('');
    })
  }

  onIssuesScroll() {
    this.currentIssuesPage += 1;
    this.issueService.getIssues(this.selectedRepoName, this.currentIssuesPage).subscribe(issues => {
      this.issues = [...this.issues, ...issues];
    })
  }

}
