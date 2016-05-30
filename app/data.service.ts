import {AppComponent} from './app.component';
import {Http} from "@angular/http";

export class DataService {
    public data;
    constructor(public http:Http) {
        if(AppComponent.myData == undefined) {
            http.get("app/data.json")
                .subscribe((data)=> {
                    this.data = data.json();
                    AppComponent.myData = this.data;
                });
        } else {
            this.data = AppComponent.myData;
        }
    }
}