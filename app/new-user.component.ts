import {Component} from '@angular/core';
import { NgForm }    from '@angular/common';
import { Router, ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {Http} from "@angular/http";

import {User} from './user';
import {DataService} from './data.service'

@Component({
    selector: 'new-user-from',
    templateUrl: './views/new-user.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class NewUserComponent extends DataService {

    constructor(private router: Router, public http: Http) {
        super(http);
    }

    model = new User(this.data.length + 1, '', '', '', '', null);

    addSubmit(item) {
        if(item.form.value.id == this.data.length + 1) {
            this.data.push(item.form.value);
            alert("User Added Successfully");
        } else {
            alert("Sorry, something went wrong");
        }
        this.router.navigate(['/']);
    }
}