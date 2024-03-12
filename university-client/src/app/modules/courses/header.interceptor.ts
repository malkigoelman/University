import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const bearer = localStorage.getItem('userToken');
        const encodedBearer = encodeURIComponent(bearer); // Encode the token

        const modifiedReq = req.clone({
            headers: req.headers.set('Authorization', encodedBearer).set('Accept', 'application/json')
        });

        return next.handle(modifiedReq);
    }
}
