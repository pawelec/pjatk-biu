import { Component, Input, 
        OnInit, OnChanges } from "@angular/core";
import { UsersService } from "../service";
import { IRepo} from "./repo";
import { Subscription } from 'rxjs/Subscription';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
    moduleId: module.id,
    selector: "reposComponent",
    templateUrl: "./repos.component.html",
    styleUrls: ["repos.component.css"]
})

export class UserReposComponent
    implements OnInit, OnChanges {
    @Input() name: string;
    repos: IRepo[];
    showCharts: boolean = false;
    private sub: Subscription;
    private errorMessage: string;

    constructor(private _usersService: UsersService) {
    }

    ngOnInit(): void {
        this.getRepos(this.name);
    }
    ngOnChanges(): void {
        this.getRepos(this.name);
    }
    getRepos(name: string): void {
        this._usersService.getRepos(this.name).subscribe(
            repos => this.repos = repos,
            error => this.errorMessage = <any>error);
    }
    toggleCharts(): void {
        this.showCharts = !this.showCharts;
    }
    calculateStars(): number {
        let stargazersCount = 0;
        this.repos.forEach(repo => {
            stargazersCount += repo.stargazers_count;
        });
        console.log(stargazersCount);
        return stargazersCount;
    }
}