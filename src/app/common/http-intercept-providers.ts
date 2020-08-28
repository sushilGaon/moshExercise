import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptor } from '../Http-interceptor/auth-header-interceptor';

export const httpInterceptProviders = [
    {provide: HTTP_INTERCEPTORS, useClass:AuthHeaderInterceptor, multi :true}
]