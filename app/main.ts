import { bootstrap }        from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {CookieService} from 'angular2-cookie/core';
import { AppComponent }     from './app.component';
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, CookieService]);