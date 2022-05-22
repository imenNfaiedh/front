import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from './basic-authentification.service';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    // let username = 'ayoub'
    // let password = 'dummy'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAutheticatedToken();
    let username = this.basicAuthenticationService.getAutheticatedUser();
    
    console.log('basicAuthHeaderString!!',basicAuthHeaderString)
    console.log('username!!',username)
    console.log('username!!',username)
    if (basicAuthHeaderString && username)
    {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(req);
  }

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }
}
