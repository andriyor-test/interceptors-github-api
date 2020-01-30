import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { paths } from "./const";
import { MatButtonModule } from "@angular/material/button";
import {UserReposComponent} from "./components/user-repos/user-repos.component";
import {IssuesComponent} from "./components/issues/issues.component";

const routes: Routes = [
  { path: paths.github, component: UserReposComponent },
  { path: paths.issues, component: IssuesComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
