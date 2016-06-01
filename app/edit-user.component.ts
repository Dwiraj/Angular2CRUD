import {Component} from '@angular/core';
import { NgForm }    from '@angular/common';
import { Router, ROUTER_DIRECTIVES, Routes, OnActivate, RouteSegment } from '@angular/router';
import {Http} from "@angular/http";

import {User} from './user';
import {DataService} from './data.service'

@Component({
    selector: 'edit-user-from',
    templateUrl: './views/edit-user.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class EditUserComponent implements OnActivate {

    private data = JSON.parse(localStorage.getItem('userData'));
    model = new User(-1, '', '', '', '', null);
    public id;
    public parameters;
    public fields = [];


    constructor(private router: Router) {

    }

    routerOnActivate(curr: RouteSegment): void {
        this.parameters = curr.parameters;
        this.id = this.parameters.id;
        this.model = new User(
            this.data[this.id].id,
            this.data[this.id].name,
            this.data[this.id].email,
            this.data[this.id].regDate,
            this.data[this.id].city,
            this.data[this.id].age
        );

        for (let key in this.data[this.id]) {
            this.fields.push({'key': key, 'value': this.data[this.id]});
        }
    }

    resetForm() {
        this.model = new User(this.id, '', '', '', '', null);
    }

    editSubmit(item: any) {
        if(this.model.id != -1) {
            this.data.splice(this.id, 1, item.form.value);
            localStorage.setItem('userData', JSON.stringify(this.data));
            alert("User Updated Successfully");
        } else {
            alert("Sorry, something went wrong");
        }
        this.router.navigate(['/']);
    }
}