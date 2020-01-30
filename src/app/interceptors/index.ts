import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoggingInterceptor } from './logging-interceptor.service';
import { HeaderInterceptor } from './header.interceptor';
import { LoaderInterceptor } from './loader.interceptor';
import {ParamsInterceptor} from "./params.interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ParamsInterceptor, multi: true }
];

