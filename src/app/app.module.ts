// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { UsersModule } from "./users/users.module";
// Components
import { AppComponent } from './app.component';
// Services
// Other


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    UsersModule,
    SharedModule,
    AppRoutingModule
    ],
exports: [
],
  declarations: [
    AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
