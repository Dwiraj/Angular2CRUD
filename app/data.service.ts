import {Http} from "@angular/http";

export class DataService {
    public data;

    constructor(public http:Http) {
        http.get("app/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
    }

    getUsers() : string[] {
        return this.data;
    }
}