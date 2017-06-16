import { NgModule } from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';

import { UserComponent } from "./users/details/user.component";
import { NotfoundComponent } from "./shared/notfound/notfound.component";

const routes: Routes = [
      { path: "users/:name", component: UserComponent},
      { path: '', redirectTo: "", pathMatch: "full" },
      { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}