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

export class NewUserComponent/* extends DataService */{

    private data = JSON.parse(localStorage.getItem('userData'));
    model = new User(this.data.length + 1, '', '', '', '', null);

    public fields = [];
    showField = false;

    constructor(private router: Router/*, public http: Http*/) {
        /*super(http);*/
    }

    addSubmit(item) {
        console.log(item.form.value);
        if(item.form.value.id == this.data.length + 1) {
            this.data.push(item.form.value);
            localStorage.setItem('userData', JSON.stringify(this.data));
            alert("User Added Successfully");
        } else {
            alert("Sorry, something went wrong");
        }
        this.router.navigate(['/']);
    }

    addField() {
        this.showField = true;
        console.log(this.fields);
    }

    fieldsAdd(item: any) {
        console.log(item.form);
        this.fields.push(item.form.value.text);
        this.showField = false;
        console.log(this.fields);
        /*addFieldForm.controls.forEach((name, control) => {
            control.updateValue('');
            control.setErrors(null);
        });*/
    }
}