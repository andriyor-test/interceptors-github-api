import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor, HttpParams
} from "@angular/common/http";
import { Observable } from "rxjs";
import { paths } from "../const";

@Injectable()
export class ParamsInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.issues)) {
      return next.handle(req);
    }

    let newParams = new HttpParams({fromString: req.params.toString()});
    newParams = newParams.append('state', 'open');

    const modified = req.clone({
      params: newParams
    });


    return next.handle(modified);
  }
}
