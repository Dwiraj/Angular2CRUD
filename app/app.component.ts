import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {NavComponent} from "./nav.component";
import {UserDatatableComponent} from "./user-datatable.component";
import {NewUserComponent} from "./new-user.component";


@Component({
    selector: 'my-app',
    templateUrl: './views/app.component.html',
    directives: [NavComponent, UserDatatableComponent, NewUserComponent, ROUTER_DIRECTIVES],

})

@Routes([
    {path: '/', component: UserDatatableComponent},
    {path: '/newuser', component: NewUserComponent}
])

export class AppComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.router.navigate(['/']);
    }
}