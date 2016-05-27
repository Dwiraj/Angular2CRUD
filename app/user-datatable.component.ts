import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {DataTableDirectives} from 'angular2-datatable/datatable';
import {Http} from "@angular/http";
import * as _ from 'lodash';

@Component({
    selector: 'user-table',
    templateUrl: './views/user-datatable.component.html',
    directives: [DataTableDirectives],
    pipes: [DatePipe]
})

export class UserDatatableComponent {
    public data;

    constructor(public http:Http) {
        http.get("app/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
    }

    private sortByWordLength = (a:any) => {
        return a.name.length;
    }

    public removeItem(item: any) {
        if(confirm("Are you sure to delete this user ?")) {
            this.data = _.filter(this.data, (elem)=>elem!=item);
            console.log("Remove: ", item.email);
        }
    }

    public editItem(item: any) {
        alert("This is under development");
    }
}