import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {DataTableDirectives} from 'angular2-datatable/datatable';
import {Http} from "@angular/http";
import * as _ from 'lodash';
import { Router, ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {DataService} from "./data.service";

@Component({
    selector: 'user-table',
    templateUrl: './views/user-datatable.component.html',
    directives: [DataTableDirectives, ROUTER_DIRECTIVES],
    pipes: [DatePipe]
})

export class UserDatatableComponent extends DataService {
    public data = JSON.parse(localStorage.getItem('userData'));
    constructor(public http:Http, private router: Router) {
        super(http);
    }

    private sortByWordLength = (a:any) => {
        return a.name.length;
    }

    public removeItem(item: any) {
        if(confirm("Are you sure to delete this user ?")) {
            this.data = _.filter(this.data, (elem)=>elem!=item);
        }
    }

    public editItem(item: any) {
        if(item != -1) {
            this.router.navigate(['/edituser', item]);
        } else {
            alert('Sorry, something went wrong');
            this.router.navigate(['/']);
        }

    }

    public searchUtil(toSearch) {
        /* Search Text in all 3 fields , toSearch = [] */
        var final = [];
        var cnt = 0;
        var item = JSON.parse(localStorage.getItem('userData'));
        item.forEach(function(v) 
        {
            if(v.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || v.email.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || v.city.toLowerCase().indexOf(toSearch.toLowerCase()) > -1) 
            {
                final.push(v);
            }
        });

        this.data = final;
    }
}