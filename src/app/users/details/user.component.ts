import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { UsersService } from "../service";
import { IUser} from "../user";

@Component({
    moduleId: module.id,
    selector: "userComponent",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"]
})

export class UserComponent implements OnInit, OnDestroy {
    user: IUser;
    private sub: Subscription;
    private errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _usersService: UsersService) {
    }

    ngOnInit(): void {
        this.errorMessage = "";;
        this.sub = this._route.params.subscribe(
            params => {
                let name = params['name'];
                this.getUser(name);
            });
        }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getUser(name: string) {
        this.errorMessage = "";
        this._usersService.getUser(name).subscribe(
            user => this.user = user,
            error => this.errorMessage = <any>error);
    }
}