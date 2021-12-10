import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { SideBarService } from "./services/side-bar.service";

const components = [
    NavBarComponent,
    SideBarComponent
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ...components
    ],
    providers: [
        SideBarService
    ]
})
export class SharedModule { }