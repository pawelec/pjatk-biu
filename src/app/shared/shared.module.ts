// Modules
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from "./shared-routing.module";
// Components
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { SearchComponent } from "./search/search.component";
// Services

// Other

@NgModule({
    imports: [
        FormsModule,
        SharedRoutingModule 
    ],
     declarations: [
        NavbarComponent,
        SearchComponent,
        NotfoundComponent,
        AboutComponent
    ],
    exports: [
        NavbarComponent, 
        SearchComponent,
        AboutComponent],
})

export class SharedModule {

}