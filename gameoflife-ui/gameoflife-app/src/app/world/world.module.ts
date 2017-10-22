import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WorldRoutingModule} from "./world.routing.module";
import {PlayComponent} from "./play/play.component";
import {RulesComponent} from "./rules/rules.component";
import {WorldService} from "./service/world.service";

@NgModule({
  imports: [
    CommonModule,
    WorldRoutingModule
  ],
  providers: [
    WorldService,
  ],
  declarations: [
    RulesComponent,
    PlayComponent
  ],
})
export class WorldModule { }
