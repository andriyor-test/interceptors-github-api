import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.warn("HeaderInterceptor");

    const modified = req.clone({ setHeaders: { "Authorization": `token ${environment.GITHUB_TOKEN}` } });

    return next.handle(modified);
  }
}
