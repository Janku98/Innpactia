import {Inject, Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {DOCUMENT} from "@angular/common";

const TOKEN = 'tk';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    TIME = 1

    constructor(@Inject(DOCUMENT) private document: any,
                private readonly cookieService: CookieService) {
    }

    saveToken(token: string): void {
        this.cookieService.set(TOKEN, token, {expires: this.TIME, sameSite: 'Lax'})
    }

    getToken(): string {
        return this.cookieService.get(TOKEN) || ''
    }

    removeToken(): void {
        this.cookieService.delete(TOKEN)
    }

    close = () => {
        sessionStorage.clear();
        this.document.location.href = '/'
    }

}