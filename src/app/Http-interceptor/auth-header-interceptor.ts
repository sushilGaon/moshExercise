import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()

export class AuthHeaderInterceptor implements HttpInterceptor{
    intercept(request:HttpRequest<any>, next:HttpHandler){

        console.log("Auth interceptor Provider");
        const AuthToken = "My Auth Token";

        const authReq = request.clone({
            setHeaders:{Authorization:AuthToken}
        });
        return next.handle(authReq);
    }
}