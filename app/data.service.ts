import {AppComponent} from './app.component';
import {Http} from "@angular/http";

export class DataService {
    private data;
    constructor(public http:Http) {
        //if(AppComponent.myData == undefined) {
        //    http.get("app/data.json")
        //        .subscribe((data)=> {
        //            this.data = data.json();
        //            localStorage.removeItem('userData');
        //            AppComponent.myData = this.data;
        //            localStorage.setItem('userData', JSON.stringify(this.data));
        //            console.log(JSON.parse(localStorage.getItem('userData')));
        //        });
        //} else {
        //    this.data = AppComponent.myData;
        //}
        if(localStorage.getItem('userData') == null) {
            console.log("first");
            http.get("app/data.json")
                .subscribe((data)=> {
                    this.data = data.json();
                    localStorage.removeItem('userData');
                    //AppComponent.myData = this.data;
                    localStorage.setItem('userData', JSON.stringify(this.data));
                    //console.log(JSON.parse(localStorage.getItem('userData')));
                });
        } else {
            //this.data = AppComponent.myData;
            console.log("filled");
                this.data = JSON.parse(localStorage.getItem('userData'));
        }
    }
}