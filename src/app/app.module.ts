import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { ToastrModule } from "ngx-toastr";
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { httpInterceptorProviders } from "./interceptors";
import { UserReposComponent } from './components/user-repos/user-repos.component';
import { IssuesComponent } from './components/issues/issues.component';
import { GenericInfiniteScrollComponent } from './components/generic-infinite-scroll/generic-infinite-scroll.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [AppComponent, UserReposComponent, IssuesComponent, GenericInfiniteScrollComponent, LoaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    InfiniteScrollModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
