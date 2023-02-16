import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateChild,
    Router,
    RouterStateSnapshot
} from '@angular/router';

import { TokenService } from '../services/token.service';

@Injectable({
    providedIn: 'root'
})
export class TokenGuard implements CanActivateChild {

    constructor(private readonly tokenService: TokenService,
                private readonly router: Router) {
    }

    redirect(token: string): void {
        if (!token) {
            this.router.navigate(['/login'])
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token: string = this.tokenService.getToken();
        this.redirect(token);
        return !!token;
    }
    
}