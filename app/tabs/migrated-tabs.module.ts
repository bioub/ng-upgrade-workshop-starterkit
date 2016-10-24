import {CommonModule} from "@angular/common";
import {MigratedTabsComponent, MigratedTabComponent} from "./migrated-tabs.component";
import {NgModule} from "@angular/core";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MigratedTabsComponent,
        MigratedTabComponent
    ],
    exports: [
        MigratedTabsComponent,
        MigratedTabComponent
    ]
})
export class MigratedTabsModule {
}
