import {Component} from '@angular/core';
import { NgForm }    from '@angular/common';
import { Router, ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {Http} from "@angular/http";
import {DatePipe} from "@angular/common";
import {DataTableDirectives} from 'angular2-datatable/datatable';
import * as _ from 'lodash';

import {User} from './user';
import {UserDatatableComponent} from './user-datatable.component';

@Component({
    selector: 'new-user-from',
    templateUrl: './views/new-user.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [DatePipe]
})

export class NewUserComponent extends UserDatatableComponent {
    constructor(private router: Router,public http:Http) {
        super(http);

    }

    model = new User(0, '', '', '', '', null);

    onSubmit(item) {
        console.log(item.form.value);
        this.data.push(item.form.value);
        console.log(this.data);
        alert("User Added Successfully");
        this.router.navigate(['/']);
    }
}