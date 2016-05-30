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

export class EditUserComponent extends DataService implements OnActivate {

    model = new User(-1, '', '', '', '', null);
    public id;
    public parameters;

    constructor(private router: Router, public http: Http) {
        super(http);
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
    }

    resetForm() {
        this.model = new User(this.id, '', '', '', '', null);
    }

    editSubmit(item: any) {
        if(this.model.id != -1) {
            this.data.splice(this.id, 1, item.form.value);
            alert("User Updated Successfully");
        } else {
            alert("Sorry, something went wrong");
        }
        this.router.navigate(['/']);
    }
}