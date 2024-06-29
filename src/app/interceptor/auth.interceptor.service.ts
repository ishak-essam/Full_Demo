import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class authInterceptService implements HttpInterceptor {
  constructor() {
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request = req.clone({ headers: req.headers.append('token', 'addsdas') });

    console.log('Method not implemented.');
    return next.handle(req);
  }
}
