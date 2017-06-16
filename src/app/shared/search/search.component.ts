import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "searchComponent",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"]
})

export class SearchComponent implements OnInit, OnDestroy {
    searchText: string;

    constructor(
                private _router: Router) {
    }

    ngOnInit(): void {
        this.searchText = "";
    }
    ngOnDestroy(): void {
        this.searchText = "";
    }
    onSubmit() {
        if(this.searchText !== "" 
            && this.searchText !== " "
            && this.searchText.length >= 2) { // TODO: check if it is not only white spaces
            var userName = this.searchText;
            this.searchText = "";
            this._router.navigate(["/users", userName]);
        }
    }
}