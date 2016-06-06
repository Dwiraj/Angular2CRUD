import {AppComponent} from './app.component';
import {Http} from "@angular/http";

export class DataService {
    public data;
    constructor(public http:Http) {
        if(localStorage.getItem('userData') == null) {
            http.get("app/data.json")
                .subscribe((data)=> {
                    this.data = data.json();
                    localStorage.removeItem('userData');
                    localStorage.setItem('userData', JSON.stringify(this.data));
                });
        } else {
            this.data = JSON.parse(localStorage.getItem('userData'));
        }
    }
}