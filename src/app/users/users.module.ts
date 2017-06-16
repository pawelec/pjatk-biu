// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersRoutingModule } from "./users-routing.module";

// Components
import { UserComponent } from "./details/user.component";
import { UserReposComponent } from "./repos/repos.component";
// Services
import { UsersService } from "./service";

// Other


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    UsersRoutingModule,
    
],
  declarations: [
    UserComponent,
    UserReposComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
